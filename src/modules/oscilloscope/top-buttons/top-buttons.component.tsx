import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Grid, IconButton } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SettingsIcon from '@material-ui/icons/Settings';
import StopIcon from '@material-ui/icons/Stop';

import { OSCILLOSCOPE, SETTINGS } from 'pages/App.routes';

interface Props {
  devicePath: string;
  isStart: boolean;
  onToggleStart: () => void;
}

export const AhfTopButtonsComponent: React.FC<Props> = ({
  devicePath,
  isStart,
  onToggleStart,
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
          onClick={onToggleStart}
        >
          {isStart ? <StopIcon /> : <PlayArrowIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
};
