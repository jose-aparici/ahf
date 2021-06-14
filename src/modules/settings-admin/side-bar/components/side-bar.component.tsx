import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Typography } from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SaveIcon from '@material-ui/icons/Save';

import { useSideBarComponentStyles } from './side-bar.component.styles';

interface Props {
  onOpenList: () => void;
  onOpenSaveFileName: () => void;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  onOpenList,
  onOpenSaveFileName,
}: Props) => {
  const classes = useSideBarComponentStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.iconsRoot}>
      <div className={clsx(classes.iconsSection, classes.iconsSectionUpdate)}>
        <Typography className={classes.iconsSectionTitle} variant="h3">
          {t('SETTINGS_ADMIN.SIDEBAR.UPDATE.TITLE')}
        </Typography>
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
