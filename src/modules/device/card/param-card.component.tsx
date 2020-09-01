import React from 'react';

import { Avatar, Card, CardContent, Typography } from '@material-ui/core';

import { Param } from 'domain/ahf/ahf.types';

import { useParamCardComponentStyles } from './param-card.component.styles';

interface Props {
  param: Param;
}

export const AhfParamCardComponent: React.FC<Props> = ({ param }: Props) => {
  const classes = useParamCardComponentStyles();
  return (
    <Card variant="elevation">
      <CardContent className={classes.contentContainer}>
        <div className={classes.infoContainer}>
          <Avatar className={classes.avatar}>{param.ParamID}</Avatar>
          <Typography>{param.Name[1]}</Typography>
        </div>
        <div className={classes.unitContainer}>
          <Typography component="h1" className={classes.value}>
            {param.Value === undefined ? '---' : param.Value}
          </Typography>
          <Typography className={classes.unit}>{param.Unit}</Typography>
        </div>
        <Typography>{param.Description[1]}</Typography>
      </CardContent>
    </Card>
  );
};
