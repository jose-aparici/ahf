import clsx from 'clsx';
import React from 'react';

import { Button, SwipeableDrawer, Typography } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RestoreIcon from '@material-ui/icons/Restore';
import SaveIcon from '@material-ui/icons/Save';

import { useSideBarComponentStyles } from './side-bar.component.styles';

interface Props {
  onToggleSideBar: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  onToggleSideBar,
  isOpen,
}: Props) => {
  const classes = useSideBarComponentStyles();

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={isOpen}
      onClose={() => onToggleSideBar(isOpen)}
      onOpen={() => onToggleSideBar(isOpen)}
    >
      <div className={classes.iconsRoot}>
        <div className={clsx(classes.iconsSection, classes.iconsSectionUpdate)}>
          <Typography className={classes.iconsSectionTitle}>Update</Typography>
          <Button
            className={clsx(classes.eventsButton, classes.latestEventsButton)}
            variant="outlined"
            size="large"
            startIcon={<RestoreIcon />}
          >
            <Typography>Latest records</Typography>
          </Button>
          <Button
            className={clsx(classes.eventsButton, classes.allEventsButton)}
            variant="outlined"
            size="large"
            startIcon={<FileCopyIcon />}
          >
            <Typography>All records</Typography>
          </Button>
        </div>
        <div className={classes.iconsSection}>
          <Typography className={classes.iconsSectionTitle}>
            Event log actions
          </Typography>
          <Button
            className={clsx(
              classes.eventsButton,
              classes.openSavedEventsButton,
            )}
            variant="outlined"
            size="large"
            startIcon={<FolderOpenIcon />}
          >
            <Typography>Open saved eventlogs</Typography>
          </Button>
          <Button
            className={clsx(classes.eventsButton, classes.saveEventsButton)}
            variant="outlined"
            size="large"
            startIcon={<SaveIcon />}
          >
            <Typography>Save eventlog</Typography>
          </Button>
        </div>
      </div>
    </SwipeableDrawer>
  );
};
