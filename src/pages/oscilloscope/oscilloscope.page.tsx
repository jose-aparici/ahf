import React, { useEffect } from 'react';

import { AhfOScilloscopeContainer } from 'modules/oscilloscope/oscilloscope.container';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';
import { AhfPage } from 'pages/ahf.page';

export const AhfOscilloscopePage: React.FC = () => {
  const { stopUpdate } = useSocketHook();

  useEffect(() => {
    stopUpdate();
  }, [stopUpdate]);

  return (
    <AhfPage>
      <AhfOScilloscopeContainer />
    </AhfPage>
  );
};
