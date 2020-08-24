import React from 'react';

import { Card, CardActions, CardContent, Typography } from '@material-ui/core';

import { Param } from 'domain/params-group/params-group.type';

interface Props {
  param: Param;
}

export const AhfParamComponent: React.FC<Props> = ({ param }: Props) => (
  <Card variant="elevation">
    <CardContent>
      <Typography>{param.title}</Typography>
    </CardContent>
    <CardActions>
      <Typography>{param.description}</Typography>
    </CardActions>
  </Card>
);
