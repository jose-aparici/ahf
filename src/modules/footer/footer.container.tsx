import React from 'react';
import { useLocation } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { AppRoutes } from 'pages/App.routes';

import { useFooterContainerStyles } from './footer.container.styles';
import { AhfNavigationIconsContainer } from './navigation-icons/navigation-icons.component';

export const AhfFooterContainer: React.FC = () => {
  const classes = useFooterContainerStyles();
  const location = useLocation();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {location.pathname !== AppRoutes.DevicesPage && (
            <>
              <Typography>{new Date().toISOString()}</Typography>
              <div className={classes.iconsSection}>
                <AhfNavigationIconsContainer />
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
