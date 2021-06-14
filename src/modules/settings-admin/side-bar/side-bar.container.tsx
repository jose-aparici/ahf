import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfContext } from 'contexts/store/context';
import React, { useContext, useState } from 'react';

import { Box, SwipeableDrawer, Toolbar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { transformCurrentFileToAhfCurrentFile } from 'domain/ahf-settings-admin/ahf-settings-admin.utils';
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

  const {
    readParameterSetList,
    readParameterSetFile,
    writeParameterSetFile,
  } = useSocketHook();
  const { state: appState, dispatch } = useContext(AhfContext);

  const [isOpen, setIsOpen] = useState(false);
  const [openEditFileName, setOpenEditFileName] = useState(false);

  const handleToggleSideBar = (open: boolean): void => setIsOpen(!open);

  const handleOpenFileList = () => {
    onClearFileList();
    readParameterSetList();
  };

  const handleSaveFile = () => {
    appState.settingsAdmin.currentFile?.fileName && setOpenEditFileName(true);
  };

  const handleCloseSelectFileName = () => {
    onClearFileList();
    setIsOpen(false);
  };

  const handleSelectFileName = (value: string) => {
    onClearFileList();
    openBackdrop();
    setIsOpen(false);
    readParameterSetFile(fileList[+value]);
  };

  const handleCloseEditFileName = () => setOpenEditFileName(false);

  const handleSaveEditFileName = (name: string) => {
    console.log(name);
    if (appState.settingsAdmin.currentFile !== undefined) {
      const parameterSetFile = transformCurrentFileToAhfCurrentFile(
        name,
        appState.settingsAdmin.currentFile,
      );
      writeParameterSetFile(parameterSetFile);
    }
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

        <AhfSideBarComponent
          onOpenList={handleOpenFileList}
          onSaveFile={handleSaveFile}
        />
        <Toolbar className={classes.toolBarBottom} />
      </SwipeableDrawer>
      {fileList.length > 0 && (
        <AhfParamEditContainerMemoized
          type={ParamType.ENUM}
          value={'0'}
          values={fileList}
          button2Text="SETTINGS_ADMIN.SIDEBAR.ACTIONS.BUTTONS.OPEN"
          onClose={handleCloseSelectFileName}
          onSave={handleSelectFileName}
        />
      )}

      {openEditFileName && appState.settingsAdmin.currentFile && (
        <AhfParamEditContainerMemoized
          type={ParamType.FILE_NAME}
          value={appState.settingsAdmin.currentFile?.fileName}
          values={[]}
          onClose={handleCloseEditFileName}
          onSave={handleSaveEditFileName}
        />
      )}
    </>
  );
};
