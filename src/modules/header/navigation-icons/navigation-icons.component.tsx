import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import { AppRoutes } from 'pages/App.routes';

interface Props {
  classes: string;
}

export const AhfNavigationIconsComponent: React.FC<Props> = ({
  classes,
}: Props) => (
  <div className={classes}>
    <IconButton
      component={Link}
      to={AppRoutes.DevicesPage}
      color="inherit"
      aria-label="menu"
    >
      <SettingsIcon />
    </IconButton>
  </div>
);
