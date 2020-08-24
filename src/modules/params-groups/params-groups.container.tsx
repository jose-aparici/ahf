import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { ParamsGroup } from 'domain/params-group/params-group.type';

import { AhfParamsGroupContainer } from './params-group/params-group.container';
import { useParamsGroups } from './params-groups.hook';

export const AhfParamsGroupsContainer: React.FC = () => {
  const [paramsGroups, setParamsGroups] = useState<Array<ParamsGroup>>([]);
  const { retrieveParamsGroupsData } = useParamsGroups();

  useEffect(() => {
    const paramsGroupsData$ = retrieveParamsGroupsData().subscribe(
      setParamsGroups,
    );
    return () => paramsGroupsData$.unsubscribe();
  }, [retrieveParamsGroupsData]);

  return (
    <SwipeableViews enableMouseEvents>
      {paramsGroups.map((paramsGroup, index) => (
        <AhfParamsGroupContainer key={index} paramsGroup={paramsGroup} />
      ))}
    </SwipeableViews>
  );
};
