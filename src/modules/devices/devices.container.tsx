import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { DevInfo } from 'domain/ahf/ahf.types';
import { AppRoutes } from 'pages/App.routes';

export const AhfDevicesContainer: React.FC = () => {
  const { state } = useContext(AhfContext);

  return (
    <>
      {Object.keys(state.devices).map((deviceKey, index) => (
        <Link key={index} to={`${AppRoutes.DevicesPage}/${deviceKey}`}>
          {(state.devices[+deviceKey].info as DevInfo).ID}
        </Link>
      ))}
    </>
  );
};
