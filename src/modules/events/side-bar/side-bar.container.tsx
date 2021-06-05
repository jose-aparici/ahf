import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfContext } from 'contexts/store/context';
import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useState } from 'react';

import { Box, SwipeableDrawer, Toolbar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { AppCommand } from 'domain/app/app.types';
import { transformFromLogToAhfLog } from 'domain/event/event.utils';
import {
  ALL_EVENTS_SIZE,
  EventLogFiles,
  LATEST_EVENTS_SIZE,
  Log,
} from 'domain/event/events.type';
import { ParamType } from 'domain/param/param.types';
import { AhfParamEditContainerMemoized } from 'modules/shared/param-edit/param-edit.container';

import { AhfSideBarComponent } from './components/side-bar.component';
import { useSideBarContainerStyles } from './side-bar.container.styles';

interface Props {
  logFiles: EventLogFiles;
  onClearLogFiles: () => void;
  onClearEventLogs: () => void;
}

export const AhfSideBarContainer: React.FC<Props> = ({
  logFiles,
  onClearLogFiles,
  onClearEventLogs,
}: Props) => {
  const classes = useSideBarContainerStyles();
  const { state: appState, dispatch } = useContext(AhfContext);

  const [isOpen, setIsOpen] = useState(false);
  const { openBackdrop } = useContext(AhfBackdropContext);
  const {
    readEvents,
    readEventLogFiles,
    readEventLogFromFile,
    writeEvents,
  } = useSocketHook();

  const [openFileListEditModal, setOpenFileListEditModal] = useState(false);
  const [openFileNameEditModal, setOpenFileNameEditModal] = useState(false);

  const handleToggleSideBar = (open: boolean): void => setIsOpen(!open);

  const handleRetrieveAll = () => {
    onClearEventLogs();
    setIsOpen(false);
    openBackdrop();
    readEvents(ALL_EVENTS_SIZE);
  };

  const handleRetrieveLatest = () => {
    onClearEventLogs();
    setIsOpen(false);
    openBackdrop();
    readEvents(LATEST_EVENTS_SIZE);
  };

  const handleOpenSaveEventLogs = () => {
    onClearLogFiles();
    readEventLogFiles();
    setOpenFileListEditModal(true);
  };

  const handleSelectEventLogFile = (value: string) => {
    onClearEventLogs();
    onClearLogFiles();
    openBackdrop();
    setOpenFileListEditModal(false);
    setIsOpen(false);
    readEventLogFromFile(logFiles[+value]);
  };

  const handleSelectEventLogFileName = (value: string) => {
    setOpenFileNameEditModal(false);
    setIsOpen(false);
    const ahfLogs = appState.eventLogs.logs.map((log: Log) =>
      transformFromLogToAhfLog(log),
    );
    writeEvents(ahfLogs, value);
    dispatch({ type: AppCommand.CHANGE_EVENT_LOG_FILE_NAME, payload: value });
  };

  const handleCloseFileListEditModal = () => {
    setOpenFileListEditModal(false);
    setIsOpen(false);
    onClearLogFiles();
  };

  const handleCloseFileNameEditModal = () => {
    setOpenFileNameEditModal(false);
    setIsOpen(false);
  };

  const handleSaveEventLogs = () => {
    if (appState.eventLogs.fileName.length > 0) {
      setOpenFileNameEditModal(true);
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
          onRetrieveAll={handleRetrieveAll}
          onRetrieveLatest={handleRetrieveLatest}
          onOpenSaveEventLogs={handleOpenSaveEventLogs}
          onSaveEventLogs={handleSaveEventLogs}
        />
        <Toolbar className={classes.toolBarBottom} />
      </SwipeableDrawer>
      {openFileListEditModal && logFiles.length > 0 && (
        <AhfParamEditContainerMemoized
          type={ParamType.ENUM}
          value={'0'}
          values={logFiles}
          button2Text="RESOURCE.PARAM_DETAIL.EDIT.BUTTONS.OPEN"
          onClose={handleCloseFileListEditModal}
          onSave={handleSelectEventLogFile}
        />
      )}

      {openFileNameEditModal && (
        <AhfParamEditContainerMemoized
          type={ParamType.FILE_NAME}
          value={appState.eventLogs.fileName}
          values={[]}
          onClose={handleCloseFileNameEditModal}
          onSave={handleSelectEventLogFileName}
        />
      )}
    </>
  );
};
