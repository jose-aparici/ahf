import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfContext } from 'contexts/store/context';
import React, { useContext, useState } from 'react';

import { Box, SwipeableDrawer, Toolbar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { ParamType } from 'domain/param/param.types';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { AhfSideBarComponent } from './components/side-bar.component';
import { useSideBarContainerStyles } from './side-bar.container.styles';

interface Props {
  fileList: string[];
  onClearFileList: () => void;
}

export const AhfSideBarContainer: React.FC<Props> = ({
  fileList,
  onClearFileList,
}: Props) => {
  const classes = useSideBarContainerStyles();

  const { openBackdrop } = useContext(AhfBackdropContext);

  const { readParameterSetList, readParameterSetFile } = useSocketHook();
  const { state: appState, dispatch } = useContext(AhfContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSideBar = (open: boolean): void => setIsOpen(!open);

  const handleOpenList = () => {
    onClearFileList();
    readParameterSetList();
  };

  const handleSave = () => {
    console.log('save');
  };

  const handleCloseFileNameEditModal = () => {
    onClearFileList();
    setIsOpen(false);
  };

  const handleSelectFileNameEditModal = (value: string) => {
    onClearFileList();
    openBackdrop();
    setIsOpen(false);
    readParameterSetFile(fileList[+value]);
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

        <AhfSideBarComponent onOpenList={handleOpenList} onSave={handleSave} />
        <Toolbar className={classes.toolBarBottom} />
      </SwipeableDrawer>
      {fileList.length > 0 && (
        <AhfParamEditContainerMemoized
          type={ParamType.ENUM}
          value={'0'}
          values={fileList}
          button2Text="SETTINGS_ADMIN.SIDEBAR.ACTIONS.BUTTONS.OPEN"
          onClose={handleCloseFileNameEditModal}
          onSave={handleSelectFileNameEditModal}
        />
      )}
    </>
  );
};
