import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SettingsIcon from '@material-ui/icons/Settings';

import { useSideBarComponentStyles } from './side-bar.component.styles';

export const AhfSideBarComponent: React.FC = () => {
  const classes = useSideBarComponentStyles();
  const { t } = useTranslation();

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <IconButton
            component={Button}
            color="inherit"
            aria-label="menu"
            size="small"
          >
            <SettingsIcon />
          </IconButton>
        </Grid>
        <Grid container item xs={9} justify="flex-end">
          <Grid>
            <IconButton
              component={Button}
              color="inherit"
              aria-label="menu"
              size="small"
            >
              <PlayArrowIcon />
            </IconButton>
          </Grid>
          <Grid>
            <IconButton component={Button} color="inherit" aria-label="menu">
              <PauseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Divider />

      <Grid container>
        <Typography className={classes.iconsSectionTitle} variant="h3">
          {t('OSCILLOSCOPE.SIDEBAR.PARAMETERS.TITLE')}
        </Typography>
      </Grid>
    </>
  );
};
