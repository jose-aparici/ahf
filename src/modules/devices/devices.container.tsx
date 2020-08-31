import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { DeviceInfo } from 'domain/ahf/ahf.types';
import { AppRoutes } from 'pages/App.routes';

export const AhfDevicesContainer: React.FC = () => {
  const { state } = useContext(AhfContext);

  return (
    <>
      {Object.keys(state.devices).map((deviceKey, index) => {
        const deviceInfo = state.devices[+deviceKey].info as DeviceInfo;
        return (
          <Link key={index} to={`${AppRoutes.DevicesPage}/${deviceKey}`}>
            {deviceInfo.ID} Status: {deviceInfo.Status}
          </Link>
        );
      })}
    </>
  );
};
