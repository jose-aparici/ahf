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

  useEffect(() => {
    if (state.oscilloscope.settings.params.length <= 0) {
      dispatch({
        type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
        payload: {
          settings: {
            channels: params.slice(0, 6),
            params,
            trigger: params[0],
            triggerLevel: 0,
            mode: 0,
            samplePeriod: 0,
            delay: 0,
          },
        },
      });
    }
  }, [params, state.oscilloscope.settings.params, dispatch]);

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
