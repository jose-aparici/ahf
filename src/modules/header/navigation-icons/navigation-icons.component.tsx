import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';

import { AppRoutes } from 'pages/App.routes';

export const AhfNavigationIconsComponent: React.FC = () => (
  <>
    <IconButton
      component={Link}
      to={AppRoutes.DevicesPage}
      color="inherit"
      aria-label="menu"
    >
      <SettingsIcon />
    </IconButton>

    <IconButton
      component={Link}
      to={AppRoutes.DevicesPage}
      color="inherit"
      aria-label="menu"
    >
      <HomeIcon />
    </IconButton>
  </>
);
