import React from 'react';

import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { Param } from 'domain/param/param.types';

import { useParamComponentStyles } from './param.component.styles';

interface Props {
  param: Param;
  currentLanguage: number;
  onClickParam: (paramId: number) => void;
}

export const AhfParamComponent: React.FC<Props> = ({
  param,
  currentLanguage,
  onClickParam,
}: Props) => {
  const classes = useParamComponentStyles();
  return (
    <Card variant="elevation" onClick={() => onClickParam(param.ParamID)}>
      <CardContent className={classes.contentContainer}>
        <div className={classes.infoContainer}>
          <Avatar className={classes.avatar}>{param.ParamID}</Avatar>
          <Typography>{param.Name[currentLanguage]}</Typography>
          <EditIcon className={classes.editIcon} />
        </div>
        <div className={classes.unitContainer}>
          <Typography component="h1" className={classes.value}>
            {param.Value === undefined ? '---' : param.Value}
          </Typography>
          <Typography className={classes.unit}>{param.Unit}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
