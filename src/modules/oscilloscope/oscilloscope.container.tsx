import { AhfContext } from 'contexts/store/context';
import React, { useCallback, useContext, useEffect, useState } from 'react';
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
  const [sliderChannelValues, setSliderChannelValues] = useState<number[][]>([
    [],
  ]);

  const { readOscilloscopeStatus, writeOscilloscopeStatus } = useSocketHook();

  const { params } = useOscilloscopeContainer();
  const { settings, chart, status } = state.oscilloscope;

  useEffect(() => {
    if (settings.params.length <= 0 && params.length > 0) {
      dispatch({
        type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
        payload: {
          settings: {
            channels: settings.channels.map((channel) => {
              const param = params.find(
                (param) => param.paramId === channel.id,
              );
              return param
                ? { id: channel.id, value: param, selected: true }
                : { id: channel.id };
            }),
            params,
            trigger: params.find(
              (param) => param.paramId === settings.trigger.id,
            )
              ? { id: params[0].paramId, value: params[0] }
              : { id: settings.trigger.id },
            triggerLevel: settings.triggerLevel,
            triggerMode: settings.triggerMode,
            samplePeriod: settings.samplePeriod,
            delay: settings.delay,
            mode: settings.mode,
            type: settings.type,
          },
          chart: chart,
          status: status,
        },
      });
    }
  }, [params, settings, chart, status, dispatch]);

  const handleSliderValuesChange = useCallback(
    (sliderValues: number[]) => {
      if (chart) {
        setSliderChannelValues(
          settings.channels.map((channel, index) => {
            return [
              chart[settings.mode].datasets[index].data[sliderValues[0]],
              chart[settings.mode].datasets[index].data[sliderValues[1]],
            ];
          }),
        );
      }
    },
    [chart, settings.channels, settings.mode],
  );

  const handleModeChange = (mode: number) => {
    settings.mode = mode;
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: {
        settings: { ...settings },
        chart: chart,
        status: state.oscilloscope.status,
      },
    });
  };

  const handleTypeChange = (type: number) => {
    settings.type = type;
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: {
        settings: { ...settings },
        chart: chart,
        status: state.oscilloscope.status,
      },
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
      {deviceId && state.devices[+deviceId].structure && (
        <AhfTopButtonsComponent
          devicePath={state.devices[+deviceId].structure.id}
          onToggleStatus={handleToggleStatus}
          currentMode={settings.mode}
          currentType={settings.type}
          isPlayStatus={status === Status.iddle || status === Status.dataReady}
          onChangeMode={handleModeChange}
          onChangeType={handleTypeChange}
        />
      )}

      <AhfChartContainer
        open={isOpen === undefined ? false : isOpen}
        onSliderValuesChange={handleSliderValuesChange}
      />

      <AhfSideBarContainer
        isOpen={isOpen === undefined ? false : isOpen}
        onToggleSideBar={handleToggleSideBar}
        sliderChannelValues={sliderChannelValues}
      />
    </>
  );
};
