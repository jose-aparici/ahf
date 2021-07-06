import { AhfContext } from 'contexts/store/context';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppCommand } from 'domain/app/app.types';
import { extractDeviceFromPath } from 'domain/path/path.utils';

import { AhfChartContainer } from './chart/chart-container';
import { useOscilloscopeContainer } from './oscilloscope.container.hook';
import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTopButtonsComponent } from './top-buttons/top-buttons.component';

export const AhfOScilloscopeContainer: React.FC = () => {
  const { state, dispatch } = useContext(AhfContext);
  const location = useLocation();

  const deviceId = extractDeviceFromPath(location.pathname);
  const [start, setStart] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>();

  const { params } = useOscilloscopeContainer();
  const { settings } = state.oscilloscope;

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
                ? { id: channel.id, value: param }
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
          },
        },
      });
    }
  }, [params, settings, dispatch]);

  const handleToggleStart = () => {
    setStart((previous) => !previous);
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
          isStart={start}
          onToggleStart={handleToggleStart}
        />
      )}

      <AhfChartContainer open={isOpen === undefined ? false : isOpen} />

      <AhfSideBarContainer
        channels={state.oscilloscope.settings.channels}
        isOpen={isOpen === undefined ? false : isOpen}
        onToggleSideBar={handleToggleSideBar}
      />
    </>
  );
};
