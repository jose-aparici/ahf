import { useSocketHook } from 'hooks/socket-hook';
import React, { useState } from 'react';

import { SwipeableDrawer, Toolbar } from '@material-ui/core';

import { AhfSideBarComponent } from './components/side-bar.component';
import { useSideBarContainerStyles } from './side-bar.container.styles';

export const AhfSideBarContainer: React.FC = () => {
  const classes = useSideBarContainerStyles();
  const [isOpen, setIsOpen] = useState(true);
  const { readEvents } = useSocketHook();

  const handleToggleSideBar = (open: boolean): void => setIsOpen(!open);

  const handleRetrieveAll = () => readEvents();

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={isOpen}
      onClose={() => handleToggleSideBar(isOpen)}
      onOpen={() => handleToggleSideBar(isOpen)}
      SwipeAreaProps={{ className: classes.swipeArea }}
    >
      <Toolbar className={classes.toolBarTop} />
      <AhfSideBarComponent onRetrieveAll={handleRetrieveAll} />
      <Toolbar className={classes.toolBarBottom} />
    </SwipeableDrawer>
  );
};
