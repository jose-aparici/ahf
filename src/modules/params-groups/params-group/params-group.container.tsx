import React from 'react';

import { ParamsGroup } from 'domain/params-group/params-group.type';

import { AhfParamsGroupGridContainer } from '../grid/params-group-grid.container';
import { useParamsGroupContainerStyles } from './params-group.container.styles';

interface Props {
  paramsGroup: ParamsGroup;
}

export const AhfParamsGroupContainer: React.FC<Props> = ({
  paramsGroup,
}: Props) => {
  const classes = useParamsGroupContainerStyles();
  return (
    <AhfParamsGroupGridContainer
      className={classes.gridContainer}
      params={paramsGroup.params}
    />
  );
};
