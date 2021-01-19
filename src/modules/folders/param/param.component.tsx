import React from 'react';

import { Avatar, Card, CardContent, Typography } from '@material-ui/core';

import { Param } from 'domain/param/param.types';

import { useParamComponentStyles } from './param.component.styles';

interface Props {
  param: Param;
  currentLanguage: number;
}

export const AhfParamComponent: React.FC<Props> = ({
  param,
  currentLanguage,
}: Props) => {
  const classes = useParamComponentStyles();
  return (
    <Card variant="elevation">
      <CardContent className={classes.contentContainer}>
        <div className={classes.infoContainer}>
          <Avatar className={classes.avatar}>{param.ParamID}</Avatar>
          <Typography>{param.Name[currentLanguage]}</Typography>
        </div>
        <div className={classes.unitContainer}>
          <Typography component="h1" className={classes.value}>
            {param.Value === undefined ? '---' : param.Value}
          </Typography>
          <Typography className={classes.unit}>{param.Unit}</Typography>
        </div>
        <Typography>{param.Description[currentLanguage]}</Typography>
      </CardContent>
    </Card>
  );
};
