import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import { AppRoutes } from 'pages/App.routes';

import { useNavigationIconsComponentStyles } from './navigation-icons.component.styles';

interface Props {
  isDevicesPage: boolean;
  onScan: () => void;
}

export const AhfNavigationIconsComponent: React.FC<Props> = ({
  isDevicesPage,
  onScan,
}: Props) => {
  const classes = useNavigationIconsComponentStyles();

  return (
    <>
      {isDevicesPage ? (
        <IconButton
          className={classes.iconButton}
          component={Link}
          to={AppRoutes.DevicesPage}
          color="inherit"
          aria-label="menu"
          onClick={onScan}
        >
          <FindReplaceIcon className={classes.gridIcon} />
        </IconButton>
      ) : (
        <IconButton
          className={classes.iconButton}
          component={Link}
          to={AppRoutes.DevicesPage}
          color="inherit"
          aria-label="menu"
        >
          <ViewModuleIcon className={classes.gridIcon} />
        </IconButton>
      )}

      <IconButton
        className={classes.iconButton}
        component={Link}
        to={AppRoutes.SettingsPage}
        color="inherit"
        aria-label="menu"
      >
        <SettingsIcon />
      </IconButton>
    </>
  );
};
