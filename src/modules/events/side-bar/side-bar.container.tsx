import { AhfBackdropContext } from 'contexts/backdrop/context';
import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect, useState } from 'react';

import { SwipeableDrawer, Toolbar } from '@material-ui/core';

import {
  ALL_EVENTS_SIZE,
  EventLogFiles,
  LATEST_EVENTS_SIZE,
} from 'domain/event/events.type';
import { ParamType } from 'domain/param/param.types';
import { AhfParamEditContainerMemoized } from 'modules/shared/param-edit/param-edit.container';

import { AhfSideBarComponent } from './components/side-bar.component';
import { useSideBarContainerStyles } from './side-bar.container.styles';

interface Props {
  openSideBar: boolean;
  logFiles: EventLogFiles;
  onClearLogFiles: () => void;
}

export const AhfSideBarContainer: React.FC<Props> = ({
  openSideBar,
  logFiles,
  onClearLogFiles,
}: Props) => {
  const classes = useSideBarContainerStyles();
  const [isOpen, setIsOpen] = useState(openSideBar);
  const { openBackdrop } = useContext(AhfBackdropContext);
  const {
    readEvents,
    readEventLogFiles,
    readEventLogFromFile,
  } = useSocketHook();

  const [openEditModal, setOpenEditModal] = useState(logFiles.length > 0);

  useEffect(() => {
    setOpenEditModal(logFiles.length > 0);
  }, [logFiles.length]);

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

  const handleSelectEventLogFile = (value: string) => {
    onClearLogFiles();
    setOpenEditModal(false);
    setIsOpen(false);
    readEventLogFromFile(logFiles[+value]);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setIsOpen(false);
    onClearLogFiles();
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
        />
        <Toolbar className={classes.toolBarBottom} />
      </SwipeableDrawer>
      {openEditModal && (
        <AhfParamEditContainerMemoized
          nameTitle={'Titulo'}
          type={ParamType.ENUM}
          value={'0'}
          values={logFiles}
          onClose={handleCloseEditModal}
          onSave={handleSelectEventLogFile}
        />
      )}
    </>
  );
};
