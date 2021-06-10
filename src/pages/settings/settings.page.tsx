import React, { useEffect } from 'react';

import { AhfSettingsContainer } from 'modules/settings/settings.container';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';
import { AhfPage } from 'pages/ahf.page';

export const AhfSettingsPage: React.FC = () => {
  const { stopUpdate } = useSocketHook();

  useEffect(() => {
    stopUpdate();
  }, [stopUpdate]);

  return (
    <AhfPage>
      <AhfSettingsContainer />
    </AhfPage>
  );
};
