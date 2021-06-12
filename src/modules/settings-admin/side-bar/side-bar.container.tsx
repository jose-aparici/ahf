import React, { useState } from 'react';

import { Box, Button, SwipeableDrawer, Toolbar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { AhfSideBarComponent } from './components/side-bar.component';
import { useSideBarContainerStyles } from './side-bar.container.styles';

export const AhfSideBarContainer: React.FC = () => {
  const classes = useSideBarContainerStyles();

  const [isOpen, setIsOpen] = useState(false);
  const { readParameterSetList, readParameterSetFile } = useSocketHook();

  const handleToggleSideBar = (open: boolean): void => setIsOpen(!open);

  const handleOpenList = () => {
    readParameterSetList();
  };

  const handleSave = () => {
    console.log('save');
  };

  return (
    <>
      <SwipeableDrawer
        anchor={'right'}
        open={isOpen}
        onClose={() => handleToggleSideBar(isOpen)}
        onOpen={() => handleToggleSideBar(isOpen)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{ className: classes.swipePaper }}
        swipeAreaWidth={15}
      >
        <Toolbar className={classes.toolBarTop} />
        <Box
          className={classes.pullerContainer}
          position="absolute"
          visibility="visible"
          top={'50%'}
          right={0}
          left={0}
        >
          {!isOpen && <ChevronLeftIcon onClick={() => setIsOpen(true)} />}
        </Box>
        <Button onClick={readParameterSetFile}>Test</Button>
        <AhfSideBarComponent onOpenList={handleOpenList} onSave={handleSave} />
        <Toolbar className={classes.toolBarBottom} />
      </SwipeableDrawer>
    </>
  );
};
