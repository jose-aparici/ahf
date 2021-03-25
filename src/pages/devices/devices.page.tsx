import React from 'react';

import { AhfDevicesContainer } from 'modules/devices/devices.container';
import { AhfPage } from 'pages/ahf.page';

export const AhfDevicesPage: React.FC = () => {
  return (
    <AhfPage>
      <AhfDevicesContainer />
    </AhfPage>
  );
};
