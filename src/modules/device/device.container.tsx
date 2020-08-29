import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ParamsGroup } from 'domain/device/params-group.type';
import { AppRoutes } from 'pages/App.routes';

import { AhfDeviceCarouselContainer } from './carousel/device-carousel.container';
import { useDevice } from './device.hook';

export const AhfDeviceContainer: React.FC = () => {
  const [paramsGroups, setParamsGroups] = useState<Array<ParamsGroup>>([]);
  const { retrieveParamsGroupsData } = useDevice();

  useEffect(() => {
    const paramsGroupsData$ = retrieveParamsGroupsData().subscribe(
      setParamsGroups,
    );
    return () => paramsGroupsData$.unsubscribe();
  }, [retrieveParamsGroupsData]);

  return (
    <>
      <Link to={AppRoutes.DevicesPage}> Devices</Link>
      <AhfDeviceCarouselContainer paramsGroups={paramsGroups} />
    </>
  );
};
