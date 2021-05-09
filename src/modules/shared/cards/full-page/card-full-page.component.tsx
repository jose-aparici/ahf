import React, { ReactNode } from 'react';

import { Card, Grid } from '@material-ui/core';

import { useCardFullPageComponentStyles } from './card-full-page.component.styles';

interface Props {
  children?: ReactNode;
  minHeight?: string;
}

export const AhfCardFullPageComponent: React.FC<Props> = ({
  children,
  minHeight,
}: Props) => {
  const classes = useCardFullPageComponentStyles();
  return (
    <Grid
      container
      className={classes.gridContainer}
      style={{ minHeight: minHeight }}
    >
      <Grid item xs={12}>
        <Card variant="elevation" className={classes.cardContainer}>
          {children}
        </Card>
      </Grid>
    </Grid>
  );
};
