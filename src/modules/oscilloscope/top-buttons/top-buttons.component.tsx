import React from 'react';

import { Button, Grid, IconButton } from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SettingsIcon from '@material-ui/icons/Settings';

export const AhfTopButtonsComponent: React.FC = () => {
  return (
    <Grid container>
      <Grid>
        <IconButton
          component={Button}
          color="inherit"
          aria-label="menu"
          size="small"
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
