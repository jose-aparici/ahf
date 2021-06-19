import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Grid, IconButton } from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SettingsIcon from '@material-ui/icons/Settings';

import { OSCILLOSCOPE, SETTINGS } from 'pages/App.routes';

interface Props {
  devicePath: string;
}

export const AhfTopButtonsComponent: React.FC<Props> = ({
  devicePath,
}: Props) => {
  return (
    <Grid container>
      <Grid>
        <IconButton
          component={Link}
          color="inherit"
          aria-label="menu"
          size="small"
          to={`${devicePath}/${OSCILLOSCOPE}/${SETTINGS}`}
        >
          <SettingsIcon />
        </IconButton>
      </Grid>
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
  );
};
