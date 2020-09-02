import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { DeviceParams } from 'domain/ahf/ahf.types';

import { AhfDeviceCarouselContainer } from './carousel/device-carousel.container';

interface ParamTypes {
  deviceId: string;
}

export const AhfDeviceContainer: React.FC = () => {
  const { deviceId } = useParams<ParamTypes>();
  const { state } = useContext(AhfContext);

  return (
    <>
      {state?.devices[+deviceId]?.structure && (
        <AhfDeviceCarouselContainer
          deviceId={state.devices[+deviceId].structure.DeviceID}
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
