import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';

import { AppRoutes } from 'pages/App.routes';

import { useAppBarComponentStyles } from './app-bar.component.styles';

interface Props {
  onSideBarOpen: () => void;
}
export const AhfAppBarComponent: React.FC<Props> = ({
  onSideBarOpen,
}: Props) => {
  const classes = useAppBarComponentStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onSideBarOpen}
        >
          <MenuIcon />
        </IconButton>
        <Link to={AppRoutes.DevicesPage}>Device home</Link>
        <Link to={AppRoutes.DevicesPage}>Oscilloscope</Link>
        <Link to={AppRoutes.DevicesPage}>Event log</Link>
        <Link to={AppRoutes.DevicesPage}>
          <IconButton
            edge="start"
            className={classes.homeButton}
            aria-label="menu"
          >
            <SettingsIcon />
          </IconButton>
        </Link>
        <Link to={AppRoutes.DevicesPage}>
          <IconButton
            edge="start"
            className={classes.homeButton}
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
