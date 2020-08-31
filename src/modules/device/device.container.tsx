import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from 'pages/App.routes';

export const AhfDeviceContainer: React.FC = () => {
  return (
    <>
      <Link to={AppRoutes.DevicesPage}> Devices</Link>
    </>
  );
};
