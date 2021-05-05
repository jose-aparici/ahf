import React from 'react';
import { useParams } from 'react-router-dom';

import { AhfResourceSwipeContainer } from 'modules/resource/resource-swipe.container';
import { AhfResourceProvider } from 'modules/resource/store/context';
import { AhfPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
}

export const AhfResourcePage: React.FC = () => {
  const { deviceId } = useParams<ParamTypes>();

  return (
    <AhfPage>
      <AhfResourceProvider>
        {deviceId && <AhfResourceSwipeContainer deviceId={deviceId} />}
      </AhfResourceProvider>
    </AhfPage>
  );
};
