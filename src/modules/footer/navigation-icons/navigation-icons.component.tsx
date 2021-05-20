import React from 'react';
import { Link } from 'react-router-dom';

import { CircularProgress, Grid, IconButton } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DescriptionIcon from '@material-ui/icons/Description';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerOffIcon from '@material-ui/icons/PowerOff';

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
          {status === 0 && <DescriptionIcon htmlColor="orange" />}
          {status === 1 && (
            <CircularProgress size={20} thickness={2} color="primary" />
          )}
          {status === 2 && <PowerOffIcon htmlColor="grey" />}
          {status === 3 && <CheckCircleIcon htmlColor={'#42be65'} />}
        </IconButton>
      </Grid>
    </>
  );
};
