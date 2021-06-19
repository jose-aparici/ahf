import { AhfContext } from 'contexts/store/context';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { extractDeviceFromPath } from 'domain/path/path.utils';

import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTopButtonsComponent } from './top-buttons/top-buttons.component';

export const AhfOScilloscopeContainer: React.FC = () => {
  const { state } = useContext(AhfContext);
  const location = useLocation();

  const deviceId = extractDeviceFromPath(location.pathname);

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
