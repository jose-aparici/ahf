import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import { AppRoutes } from 'pages/App.routes';

import { useNavigationIconsComponentStyles } from './navigation-icons.component.styles';

export const AhfNavigationIconsComponent: React.FC = () => {
  const classes = useNavigationIconsComponentStyles();

  return (
    <>
      <IconButton
        className={classes.iconButton}
        component={Link}
        to={AppRoutes.DevicesPage}
        color="inherit"
        aria-label="menu"
      >
        <ViewModuleIcon className={classes.gridIcon} />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        component={Link}
        to={AppRoutes.DevicesPage}
        color="inherit"
        aria-label="menu"
      >
        <SettingsIcon />
      </IconButton>
    </>
  );
};
