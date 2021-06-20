import { AhfContext } from 'contexts/store/context';
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { AppCommand } from 'domain/app/app.types';
import { extractDeviceFromPath } from 'domain/path/path.utils';

import { useOscilloscopeContainer } from './oscilloscope.container.hook';
import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTopButtonsComponent } from './top-buttons/top-buttons.component';

export const AhfOScilloscopeContainer: React.FC = () => {
  const { state, dispatch } = useContext(AhfContext);
  const location = useLocation();

  const deviceId = extractDeviceFromPath(location.pathname);

  const { params } = useOscilloscopeContainer();

  useEffect(() => {
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: {
        settings: { channels: params.slice(0, 6), params },
      },
    });
  }, [params, state.oscilloscope.settings.params, dispatch]);

  return (
    <>
      {deviceId && state.devices[+deviceId].structure && (
        <AhfTopButtonsComponent
          devicePath={state.devices[+deviceId].structure.id}
        />
      )}
      <AhfSideBarContainer channels={state.oscilloscope.settings.channels} />
    </>
  );
};
