import React, { useEffect, useState } from 'react';

import { ParamsGroup } from 'domain/device/params-group.type';

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

  return <AhfDeviceCarouselContainer paramsGroups={paramsGroups} />;
};
