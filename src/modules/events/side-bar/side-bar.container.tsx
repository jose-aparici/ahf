import { AhfBackdropContext } from 'contexts/backdrop/context';
import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useState } from 'react';

import { SwipeableDrawer, Toolbar } from '@material-ui/core';

import { ALL_EVENTS_SIZE, LATEST_EVENTS_SIZE } from 'domain/event/events.type';

import { AhfSideBarComponent } from './components/side-bar.component';
import { useSideBarContainerStyles } from './side-bar.container.styles';

export const AhfSideBarContainer: React.FC = () => {
  const classes = useSideBarContainerStyles();
  const [isOpen, setIsOpen] = useState(true);
  const { openBackdrop } = useContext(AhfBackdropContext);
  const { readEvents, readEventLogFiles } = useSocketHook();

  const handleToggleSideBar = (open: boolean): void => setIsOpen(!open);

  const handleRetrieveAll = () => {
    setIsOpen(false);
    openBackdrop();
    readEvents(ALL_EVENTS_SIZE);
  };

  const handleRetrieveLatest = () => {
    setIsOpen(false);
    openBackdrop();
    readEvents(LATEST_EVENTS_SIZE);
  };

  const handleOpenSaveEventLogs = () => readEventLogFiles();

  /*  const handleSelectEventLogFile = () => readEventLogFromFile(); */

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={isOpen}
      onClose={() => handleToggleSideBar(isOpen)}
      onOpen={() => handleToggleSideBar(isOpen)}
      SwipeAreaProps={{ className: classes.swipeArea }}
    >
      <Toolbar className={classes.toolBarTop} />
      <AhfSideBarComponent
        onRetrieveAll={handleRetrieveAll}
        onRetrieveLatest={handleRetrieveLatest}
        onOpenSaveEventLogs={handleOpenSaveEventLogs}
      />

      <Toolbar className={classes.toolBarBottom} />
    </SwipeableDrawer>
  );
};
