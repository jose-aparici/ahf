import React from 'react';

import { AhfDevicesContainer } from 'modules/devices/devices.container';
import { AhFPage } from 'pages/ahf.page';

export const AhfDevicesPage: React.FC = () => {
  return (
    <AhFPage>
      <AhfDevicesContainer />
    </AhFPage>
  );
};
