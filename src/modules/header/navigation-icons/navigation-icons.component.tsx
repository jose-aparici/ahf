import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

import { AppRoutes } from 'pages/App.routes';

export const AhfNavigationIconsComponent: React.FC = () => (
  <>
    <IconButton
      component={Link}
      to={AppRoutes.DevicesPage}
      color="inherit"
      aria-label="menu"
    >
      <TrackChangesIcon />
    </IconButton>
    <IconButton
      component={Link}
      to={AppRoutes.DevicesPage}
      color="inherit"
      aria-label="menu"
    >
      <SettingsIcon />
    </IconButton>
  </>
);
