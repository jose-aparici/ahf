import React, { useEffect } from 'react';

import { useSocketHook } from 'modules/shared/hooks/socket-hook';
import { AhfPage } from 'pages/ahf.page';

export const AhfOscilloscopeSettingsPage: React.FC = () => {
  const { stopUpdate } = useSocketHook();

  useEffect(() => {
    stopUpdate();
  }, [stopUpdate]);

  return (
    <AhfPage>
      <div>hola</div>
    </AhfPage>
  );
};
