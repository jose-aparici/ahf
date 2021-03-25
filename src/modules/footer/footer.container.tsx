import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { useFooterContainerStyles } from './footer.container.styles';
import { AhfNavigationIconsContainer } from './navigation-icons/navigation-icons.component';

export const AhfFooterContainer: React.FC = () => {
  const classes = useFooterContainerStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography>{new Date().toISOString()}</Typography>
          <div className={classes.iconsSection}>
            <AhfNavigationIconsContainer />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
