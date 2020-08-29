import React from 'react';

import { AhfDeviceContainer } from 'modules/device/device.container';
import { AhFPage } from 'pages/ahf.page';

export const AhfDevicePage: React.FC = () => {
  return (
    <AhFPage>
      <AhfDeviceContainer />
    </AhFPage>
  );
};
