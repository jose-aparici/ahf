import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, IconButton } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import { AppRoutes } from 'pages/App.routes';

import { useNavigationIconsStyles } from './navigation-icons.component.styles';

export const AhfNavigationIconsComponent: React.FC = () => {
  const classes = useNavigationIconsStyles();
  return (
    <>
      <Grid item>
        <IconButton
          component={Link}
          className={classes.icon}
          to={AppRoutes.EventsPage}
          color="inherit"
          aria-label="menu"
        >
          <NotificationsNoneIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          component={Link}
          className={classes.icon}
          to={AppRoutes.DevicesPage}
          color="inherit"
          aria-label="menu"
        >
          <BarChartIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          component={Link}
          className={classes.icon}
          to={AppRoutes.DevicesPage}
          color="inherit"
          aria-label="menu"
        >
          <CheckCircleIcon htmlColor="green" />
        </IconButton>
      </Grid>
    </>
  );
};
