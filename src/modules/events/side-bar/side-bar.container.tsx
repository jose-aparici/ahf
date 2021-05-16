import React, { useState } from 'react';

import { SwipeableDrawer, Toolbar } from '@material-ui/core';

import { AhfSideBarComponent } from './components/side-bar.component';
import { useSideBarContainerStyles } from './side-bar.container.styles';

export const AhfSideBarContainer: React.FC = () => {
  const classes = useSideBarContainerStyles();
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSideBar = (open: boolean): void => setIsOpen(!open);

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={isOpen}
      onClose={() => handleToggleSideBar(isOpen)}
      onOpen={() => handleToggleSideBar(isOpen)}
    >
      <Toolbar className={classes.toolBarTop} />
      <AhfSideBarComponent />
      <Toolbar className={classes.toolBarBottom} />
    </SwipeableDrawer>
  );
};
