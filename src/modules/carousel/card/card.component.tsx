import React from 'react';

import { Card, CardActions, CardContent, Typography } from '@material-ui/core';

import { Card as AhfCard } from 'domain/card/card.types';

interface Props {
  card: AhfCard;
}

export const AhfCardComponent: React.FC<Props> = ({ card }: Props) => (
  <Card variant="elevation">
    <CardContent>
      <Typography>{card.title}</Typography>
    </CardContent>
    <CardActions>
      <Typography>{card.description}</Typography>
    </CardActions>
  </Card>
);
