import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { AppRoutes } from 'pages/App.routes';

interface ParamTypes {
  deviceId: string;
}

export const AhfDeviceContainer: React.FC = () => {
  const { deviceId } = useParams<ParamTypes>();

  return (
    <>
      <Link to={AppRoutes.DevicesPage}> Devices</Link>
      <div>{deviceId}</div>
    </>
  );
};
