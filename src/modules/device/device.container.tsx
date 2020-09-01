import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { DeviceParams } from 'domain/ahf/ahf.types';
import { AppRoutes } from 'pages/App.routes';

import { AhfDeviceCarouselContainer } from './carousel/device-carousel.container';

interface ParamTypes {
  deviceId: string;
}

export const AhfDeviceContainer: React.FC = () => {
  const { deviceId } = useParams<ParamTypes>();
  const { state } = useContext(AhfContext);

  return (
    <>
      <Link to={AppRoutes.DevicesPage}> Devices</Link>
      {state?.devices[+deviceId]?.structure && (
        <AhfDeviceCarouselContainer
          deviceParamsGroups={
            state.devices[+deviceId].structure.FolderData as Record<
              string,
              DeviceParams
            >
          }
        />
      )}
    </>
  );
};
