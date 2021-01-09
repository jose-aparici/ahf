import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { AppRoutes } from 'pages/App.routes';

export const AhfNavigationButtonsComponent: React.FC = () => (
  <>
    <Button component={Link} to={AppRoutes.DevicesPage} color="secondary">
      Device home
    </Button>
    <Button component={Link} to={AppRoutes.DevicesPage} color="secondary">
      Oscilloscope
    </Button>
    <Button component={Link} to={AppRoutes.DevicesPage} color="secondary">
      Event log
    </Button>
  </>
);
