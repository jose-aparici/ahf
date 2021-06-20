import React, { useEffect } from 'react';

import { AhfOscilloscopeSettingsContainer } from 'modules/oscilloscope-settings/oscilloscope-settings.container';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';
import { AhfPage } from 'pages/ahf.page';

export const AhfOscilloscopeSettingsPage: React.FC = () => {
  const { stopUpdate } = useSocketHook();

  useEffect(() => {
    stopUpdate();
  }, [stopUpdate]);

  return (
    <AhfPage>
      <AhfOscilloscopeSettingsContainer />
    </AhfPage>
  );
};
