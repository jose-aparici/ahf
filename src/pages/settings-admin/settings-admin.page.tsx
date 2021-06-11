import React, { useEffect } from 'react';

import { AhfSettingsAdminContainer } from 'modules/settings-admin/settings-admin.container';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';
import { AhfPage } from 'pages/ahf.page';

export const AhfSettingsAdminPage: React.FC = () => {
  const { stopUpdate } = useSocketHook();

  useEffect(() => {
    stopUpdate();
  }, [stopUpdate]);

  return (
    <AhfPage>
      <AhfSettingsAdminContainer />
    </AhfPage>
  );
};
