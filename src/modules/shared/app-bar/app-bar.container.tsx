import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import { AppRoutes } from 'pages/App.routes';

import { useDeviceAppContainerStyles } from './app-bar.container.styles';

export const AhfAppBarContainer: React.FC = () => {
  const classes = useDeviceAppContainerStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
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
    </div>
  );
};
