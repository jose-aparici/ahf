import React from 'react';
import { useParams } from 'react-router-dom';

import { AhfDeviceContainer } from 'modules/device/device.container';
import { AhfPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
}

export const AhfDevicePage: React.FC = () => {
  const { deviceId } = useParams<ParamTypes>();

  return (
    <AhfPage>
      <AhfDeviceContainer deviceId={deviceId} />
    </AhfPage>
  );
};
