import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Device } from 'domain/device/device.types';
import { AppRoutes } from 'pages/App.routes';

import { AhfDeviceCarouselContainer } from './carousel/device-carousel.container';
import { useDevice } from './device.hook';

export const AhfDeviceContainer: React.FC = () => {
  const [device, setDevice] = useState<Device>();
  const { retrieveDeviceData } = useDevice();

  useEffect(() => {
    const deviceData$ = retrieveDeviceData().subscribe(setDevice);
    return () => deviceData$.unsubscribe();
  }, [retrieveDeviceData]);

  return (
    <>
      <Link to={AppRoutes.DevicesPage}> Devices</Link>
      {device && <AhfDeviceCarouselContainer device={device} />}
    </>
  );
};
