import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Typography } from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import GetAppIcon from '@material-ui/icons/GetApp';
import PublishIcon from '@material-ui/icons/Publish';
import SaveIcon from '@material-ui/icons/Save';

import { useSideBarComponentStyles } from './side-bar.component.styles';

interface Props {
  onReadFromDevice: () => void;
  onWriteToDevice: () => void;
  onOpenList: () => void;
  onOpenSaveFileName: () => void;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  onReadFromDevice,
  onWriteToDevice,
  onOpenList,
  onOpenSaveFileName,
}: Props) => {
  const classes = useSideBarComponentStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.iconsRoot}>
      <div className={clsx(classes.iconsSection, classes.iconsSectionUpdate)}>
        <Typography className={classes.iconsSectionTitle} variant="h3">
          {t('SETTINGS_ADMIN.SIDEBAR.DEVICE_ACTIONS.TITLE')}
        </Typography>
        <Button
          className={clsx(classes.eventsButton, classes.openSavedEventsButton)}
          variant="outlined"
          size="large"
          startIcon={<PublishIcon />}
          onClick={onReadFromDevice}
        >
          <Typography variant="h5">
            {t('SETTINGS_ADMIN.SIDEBAR.DEVICE_ACTIONS.BUTTONS.READ')}
          </Typography>
        </Button>
        <Button
          className={clsx(classes.eventsButton, classes.saveEventsButton)}
          variant="outlined"
          size="large"
          startIcon={<GetAppIcon />}
          onClick={onWriteToDevice}
        >
          <Typography variant="h5">
            {t('SETTINGS_ADMIN.SIDEBAR.DEVICE_ACTIONS.BUTTONS.WRITE')}
          </Typography>
        </Button>
      </div>
      <div className={classes.iconsSection}>
        <Typography className={classes.iconsSectionTitle} variant="h3">
          {t('SETTINGS_ADMIN.SIDEBAR.ACTIONS.TITLE')}
        </Typography>
        <Button
          className={clsx(classes.eventsButton, classes.openSavedEventsButton)}
          variant="outlined"
          size="large"
          startIcon={<FolderOpenIcon />}
          onClick={onOpenList}
        >
          <Typography variant="h5">
            {t('SETTINGS_ADMIN.SIDEBAR.ACTIONS.BUTTONS.OPEN')}
          </Typography>
        </Button>
        <Button
          className={clsx(classes.eventsButton, classes.saveEventsButton)}
          variant="outlined"
          size="large"
          startIcon={<SaveIcon />}
          onClick={onOpenSaveFileName}
        >
          <Typography variant="h5">
            {t('SETTINGS_ADMIN.SIDEBAR.ACTIONS.BUTTONS.SAVE')}
          </Typography>
        </Button>
      </div>
    </div>
  );
};
