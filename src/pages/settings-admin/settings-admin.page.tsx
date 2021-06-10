import React, { useEffect } from 'react';

import { useSocketHook } from 'modules/shared/hooks/socket-hook';
import { AhfPage } from 'pages/ahf.page';

export const AhfSettingsAdminPage: React.FC = () => {
  const { stopUpdate } = useSocketHook();

  useEffect(() => {
    stopUpdate();
  }, [stopUpdate]);

  return (
    <AhfPage>
      <div>this is settings admin</div>
    </AhfPage>
  );
};
