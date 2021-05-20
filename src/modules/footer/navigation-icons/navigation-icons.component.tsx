import React from 'react';
import { Link } from 'react-router-dom';

import { CircularProgress, Grid, IconButton } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import { AppRoutes } from 'pages/App.routes';

import { useNavigationIconsStyles } from './navigation-icons.component.styles';

interface Props {
  status: number;
}

export const AhfNavigationIconsComponent: React.FC<Props> = ({
  status,
}: Props) => {
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
          {status === 0 && (
            <CircularProgress size={20} thickness={2} color="secondary" />
          )}
          {status === 1 && <CheckCircleIcon htmlColor="red" />}
          {status === 2 && <CheckCircleIcon htmlColor="blue" />}
          {status === 3 && <CheckCircleIcon htmlColor="grey" />}
        </IconButton>
      </Grid>
    </>
  );
};
