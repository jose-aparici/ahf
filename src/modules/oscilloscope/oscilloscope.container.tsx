import { AhfContext } from 'contexts/store/context';
import React, { useCallback, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppCommand } from 'domain/app/app.types';
import { Status } from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { extractDeviceFromPath } from 'domain/path/path.utils';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { AhfChartContainer } from './chart/chart-container';
import { useOscilloscopeContainer } from './oscilloscope.container.hook';
import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTopButtonsComponent } from './top-buttons/top-buttons.component';

export const AhfOScilloscopeContainer: React.FC = () => {
  const { state, dispatch } = useContext(AhfContext);
  const location = useLocation();

  const deviceId = extractDeviceFromPath(location.pathname);

  const [isOpen, setIsOpen] = useState<boolean>();
  const [sliderChannelValues, setSliderChannelValues] = useState<number[][]>();
  const [sliderValues, setSliderValues] = useState<number[]>([0, 511]);

  const { readOscilloscopeStatus, writeOscilloscopeStatus } = useSocketHook();

  const { settings, chart, status } = state.oscilloscope;

  useOscilloscopeContainer();

  const handleSliderValuesChange = useCallback(
    (sliderValues: number[]) => {
      setSliderValues(sliderValues);
      if (chart) {
        setSliderChannelValues(
          settings.channels.map((channel, index) => {
            return [
              chart[settings.type].datasets[index].data[sliderValues[0]],
              chart[settings.type].datasets[index].data[sliderValues[1]],
            ];
          }),
        );
      }
    },
    [chart, settings.channels, settings.type],
  );

  const handleModeChange = (mode: number) => {
    settings.mode = mode;
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: settings,
    });
  };

  const handleTypeChange = (type: number) => {
    settings.type = type;
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: settings,
    });
  };

  const handleToggleStatus = (status: Status) => {
    writeOscilloscopeStatus(status);
    readOscilloscopeStatus();
  };

  const handleToggleSideBar = useCallback(
    (): void =>
      setIsOpen((current) => {
        return current === undefined ? false : !current;
      }),
    [],
  );

  return (
    <>
      {deviceId && state.devices[+deviceId].structure && chart && (
        <>
          <AhfTopButtonsComponent
            devicePath={state.devices[+deviceId].structure.id}
            onToggleStatus={handleToggleStatus}
            currentMode={settings.mode}
            currentType={settings.type}
            isPlayStatus={
              status === Status.iddle || status === Status.dataReady
            }
            onChangeMode={handleModeChange}
            onChangeType={handleTypeChange}
          />
          <AhfChartContainer
            open={isOpen === undefined ? false : isOpen}
            onSliderValuesChange={handleSliderValuesChange}
          />
          {sliderChannelValues && (
            <AhfSideBarContainer
              isOpen={isOpen === undefined ? false : isOpen}
              onToggleSideBar={handleToggleSideBar}
              sliderChannelValues={sliderChannelValues}
              sliderValues={sliderValues}
            />
          )}
        </>
      )}
    </>
  );
};
