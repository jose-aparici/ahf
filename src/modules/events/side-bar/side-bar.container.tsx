import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfContext } from 'contexts/store/context';
import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useState } from 'react';

import { SwipeableDrawer, Toolbar } from '@material-ui/core';

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
}

export const AhfSideBarContainer: React.FC<Props> = ({
  logFiles,
  onClearLogFiles,
}: Props) => {
  const classes = useSideBarContainerStyles();
  const { state: appState } = useContext(AhfContext);

  const [isOpen, setIsOpen] = useState(appState.eventLogs.logs.length === 0);
  const { openBackdrop } = useContext(AhfBackdropContext);
  const {
    readEvents,
    readEventLogFiles,
    readEventLogFromFile,
    writeEvents,
  } = useSocketHook();

  const [openFileListEditModal, setOpenFileListEditModal] = useState(false);
  const [openFileNameEditModal, setOpenFileNameEditModal] = useState(false);

  /*  useEffect(() => {
    setOpenFileListEditModal(logFiles.length > 0);
  }, [logFiles.length]); */

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

  const handleOpenSaveEventLogs = () => {
    setOpenFileListEditModal(true);
    readEventLogFiles();
  };

  const handleSelectEventLogFile = (value: string) => {
    onClearLogFiles();
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
        SwipeAreaProps={{ className: classes.swipeArea }}
      >
        <Toolbar className={classes.toolBarTop} />
        <AhfSideBarComponent
          onRetrieveAll={handleRetrieveAll}
          onRetrieveLatest={handleRetrieveLatest}
          onOpenSaveEventLogs={handleOpenSaveEventLogs}
          onSaveEventLogs={handleSaveEventLogs}
        />
        <Toolbar className={classes.toolBarBottom} />
      </SwipeableDrawer>
      {openFileListEditModal && (
        <AhfParamEditContainerMemoized
          nameTitle={'Titulo'}
          type={ParamType.ENUM}
          value={'0'}
          values={logFiles}
          onClose={handleCloseFileListEditModal}
          onSave={handleSelectEventLogFile}
        />
      )}

      {openFileNameEditModal && (
        <AhfParamEditContainerMemoized
          nameTitle={'Titulo'}
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
