import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EventNoteIcon from '@material-ui/icons/EventNote';

import { AppRoutes } from 'pages/App.routes';

export const AhfNavigationIconsContainer: React.FC = () => {
  return (
    <>
      <IconButton
        component={Link}
        to={AppRoutes.DevicesPage}
        color="inherit"
        aria-label="menu"
      >
        <EventNoteIcon />
      </IconButton>
      <IconButton
        component={Link}
        to={AppRoutes.DevicesPage}
        color="inherit"
        aria-label="menu"
      >
        <BarChartIcon />
      </IconButton>
      <IconButton
        component={Link}
        to={AppRoutes.DevicesPage}
        color="inherit"
        aria-label="menu"
      >
        <CheckCircleIcon htmlColor="green" />
      </IconButton>
    </>
  );
};
