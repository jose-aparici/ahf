import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { AppRoutes } from 'pages/App.routes';

interface ParamTypes {
  deviceId: string;
}

export const AhfDeviceContainer: React.FC = () => {
  const { deviceId } = useParams<ParamTypes>();
  const { state } = useContext(AhfContext);

  return (
    <>
      <Link to={AppRoutes.DevicesPage}> Devices</Link>
      {state?.devices[+deviceId]?.structure &&
        state.devices[+deviceId]?.structure.FolderNames.map((folder, index) => (
          <div key={index}>{folder}</div>
        ))}
    </>
  );
};
