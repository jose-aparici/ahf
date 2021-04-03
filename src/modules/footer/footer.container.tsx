import React from 'react';
import { useLocation } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';

import { AppRoutes } from 'pages/App.routes';

import { useFooterContainerStyles } from './footer.container.styles';
import { AhfNavigationIconsComponent } from './navigation-icons/navigation-icons.component';

export const AhfFooterContainer: React.FC = () => {
  const classes = useFooterContainerStyles();
  const location = useLocation();

  return (
    <Grid container className={classes.root} alignItems="center">
      {location.pathname !== AppRoutes.DevicesPage && (
        <>
          <Grid item container xs={4} justify="flex-start">
            <Typography className={classes.text}>
              {new Date().toISOString()}
            </Typography>
          </Grid>
          <Grid container item xs={8} justify="flex-end">
            <AhfNavigationIconsComponent />
          </Grid>
        </>
      )}
    </Grid>
  );
};
