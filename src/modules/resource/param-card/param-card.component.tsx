import React from 'react';

import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { AccessType, Param } from 'domain/param/param.types';

import { useParamCardComponentStyles } from './param-card.component.styles';

interface Props {
  param: Param;
  currentLanguage: number;
  onClickParam: (param: Param) => void;
}

export const AhfParamCardComponent: React.FC<Props> = ({
  param,
  currentLanguage,
  onClickParam,
}: Props) => {
  const classes = useParamCardComponentStyles();
  return (
    <Card
      variant="elevation"
      onClick={() => onClickParam(param)}
      className={classes.cardContainer}
    >
      <CardContent className={classes.contentContainer}>
        <div className={classes.infoContainer}>
          <Avatar className={classes.avatar} variant="square">
            {param.paramId}
          </Avatar>
          <Typography>{param.name[currentLanguage]}</Typography>
          {param.accessType === AccessType.READ_WRITE && (
            <EditIcon className={classes.editIcon} />
          )}
        </div>
        <div className={classes.unitContainer}>
          <Typography className={classes.value}>
            {param.value === undefined ? '---' : `${param.value} ${param.unit}`}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
