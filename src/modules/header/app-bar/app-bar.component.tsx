import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';

import { AppRoutes } from 'pages/App.routes';

import { useAppBarComponentStyles } from './app-bar.component.styles';

interface Props {
  onToggleSideBar: () => void;
}
export const AhfAppBarComponent: React.FC<Props> = ({
  onToggleSideBar,
}: Props) => {
  const classes = useAppBarComponentStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolBarContainer}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onToggleSideBar}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.navContainer}>
          <div>
            <Button
              component={Link}
              to={AppRoutes.DevicesPage}
              color="secondary"
            >
              Device home
            </Button>
            <Button
              component={Link}
              to={AppRoutes.DevicesPage}
              color="secondary"
            >
              Oscilloscope
            </Button>
            <Button
              component={Link}
              to={AppRoutes.DevicesPage}
              color="secondary"
            >
              Event log
            </Button>
          </div>

          <div>
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
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
