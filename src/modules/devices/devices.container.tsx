import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from 'pages/App.routes';

export const AhfDevicesContainer: React.FC = () => (
  <Link to={`${AppRoutes.DevicesPage}/1`}> Device 1</Link>
);
