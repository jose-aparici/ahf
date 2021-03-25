import React, { useState } from 'react';

import { SwipeableDrawer } from '@material-ui/core';

import { AhfSideBarComponent } from './components/side-bar.component';

export const AhfSideBarContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSideBar = (open: boolean): void => setIsOpen(!open);

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={isOpen}
      onClose={() => handleToggleSideBar(isOpen)}
      onOpen={() => handleToggleSideBar(isOpen)}
    >
      <AhfSideBarComponent />
    </SwipeableDrawer>
  );
};
