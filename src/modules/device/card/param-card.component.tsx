import React from 'react';

import { Card, CardActions, CardContent, Typography } from '@material-ui/core';

import { Param } from 'domain/ahf/ahf.types';

interface Props {
  param: Param;
}

export const AhfParamCardComponent: React.FC<Props> = ({ param }: Props) => (
  <Card variant="elevation">
    <CardContent>
      <Typography>{param.ParamID}</Typography>
    </CardContent>
    <CardActions>
      <Typography>{param.Description[1]}</Typography>
    </CardActions>
    <CardActions>
      <Typography>{param.Value === undefined ? '---' : param.Value}</Typography>
    </CardActions>
  </Card>
);
