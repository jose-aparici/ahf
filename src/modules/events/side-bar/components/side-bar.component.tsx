import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Typography } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RestoreIcon from '@material-ui/icons/Restore';
import SaveIcon from '@material-ui/icons/Save';

import { useSideBarComponentStyles } from './side-bar.component.styles';

interface Props {
  onRetrieveAll: () => void;
  onOpenSaveEventLogs: () => void;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  onRetrieveAll,
  onOpenSaveEventLogs,
}: Props) => {
  const classes = useSideBarComponentStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.iconsRoot}>
      <div className={clsx(classes.iconsSection, classes.iconsSectionUpdate)}>
        <Typography className={classes.iconsSectionTitle} variant="h3">
          {t('EVENTS.SIDEBAR.UPDATE.TITLE')}
        </Typography>
        <Typography className={classes.iconsSectionTitle} variant="h6">
          {t('EVENTS.SIDEBAR.UPDATE.LAST_UPDATE_TITLE')}
        </Typography>
        <Button
          className={clsx(classes.eventsButton, classes.latestEventsButton)}
          variant="outlined"
          size="large"
          startIcon={<RestoreIcon />}
        >
          <Typography variant="h5">
            {t('EVENTS.SIDEBAR.UPDATE.BUTTONS.LATEST')}
          </Typography>
        </Button>
        <Button
          className={clsx(classes.eventsButton, classes.allEventsButton)}
          variant="outlined"
          size="large"
          startIcon={<FileCopyIcon />}
          onClick={onRetrieveAll}
        >
          <Typography variant="h5">
            {t('EVENTS.SIDEBAR.UPDATE.BUTTONS.ALL')}
          </Typography>
        </Button>
      </div>
      <div className={classes.iconsSection}>
        <Typography className={classes.iconsSectionTitle} variant="h3">
          {t('EVENTS.SIDEBAR.ACTIONS.TITLE')}
        </Typography>
        <Button
          className={clsx(classes.eventsButton, classes.openSavedEventsButton)}
          variant="outlined"
          size="large"
          startIcon={<FolderOpenIcon />}
          onClick={onOpenSaveEventLogs}
        >
          <Typography variant="h5">
            {t('EVENTS.SIDEBAR.ACTIONS.BUTTONS.OPEN_SAVED')}
          </Typography>
        </Button>
        <Button
          className={clsx(classes.eventsButton, classes.saveEventsButton)}
          variant="outlined"
          size="large"
          startIcon={<SaveIcon />}
        >
          <Typography variant="h5">
            {t('EVENTS.SIDEBAR.ACTIONS.BUTTONS.SAVE')}
          </Typography>
        </Button>
      </div>
    </div>
  );
};
