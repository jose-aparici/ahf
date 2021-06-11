import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Typography } from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SaveIcon from '@material-ui/icons/Save';

import { useSideBarComponentStyles } from './side-bar.component.styles';

interface Props {
  onOpenList: () => void;
  onSave: () => void;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  onOpenList,
  onSave,
}: Props) => {
  const classes = useSideBarComponentStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.iconsRoot}>
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
          onClick={onSave}
        >
          <Typography variant="h5">
            {t('SETTINGS_ADMIN.SIDEBAR.ACTIONS.BUTTONS.SAVE')}
          </Typography>
        </Button>
      </div>
    </div>
  );
};
