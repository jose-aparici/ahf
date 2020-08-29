import React from 'react';

import { Card, CardActions, CardContent, Typography } from '@material-ui/core';

import { Param } from 'domain/param/param.types';

interface Props {
  param: Param;
}

export const AhfParamCardComponent: React.FC<Props> = ({ param }: Props) => (
  <Card variant="elevation">
    <CardContent>
      <Typography>{param.title}</Typography>
    </CardContent>
    <CardActions>
      <Typography>{param.description}</Typography>
    </CardActions>
  </Card>
);
