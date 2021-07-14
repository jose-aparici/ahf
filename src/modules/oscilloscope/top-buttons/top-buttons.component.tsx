import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  Button,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SettingsIcon from '@material-ui/icons/Settings';
import StopIcon from '@material-ui/icons/Stop';

import {
  OscilloscopeMode,
  OscilloscopeType,
} from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { OSCILLOSCOPE, SETTINGS } from 'pages/App.routes';

interface Props {
  devicePath: string;
  isStart: boolean;
  currentMode: OscilloscopeMode;
  onChangeMode: (mode: number) => void;
  onToggleStart: () => void;
}

export const AhfTopButtonsComponent: React.FC<Props> = ({
  devicePath,
  isStart,
  currentMode,
  onChangeMode,
  onToggleStart,
}: Props) => {
  const { t } = useTranslation();

  return (
    <Grid container alignItems="center">
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
      <Grid>
        <FormControl>
          <Select
            labelId={`modes`}
            id={`select-modes`}
            value={currentMode}
            onChange={(event) => onChangeMode(event.target.value as number)}
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              getContentAnchorEl: null,
              style: { maxHeight: '400px' },
            }}
          >
            {[OscilloscopeType.TIME, OscilloscopeType.FREQUENCY].map(
              (mode, index) => {
                return (
                  <MenuItem key={index} value={mode}>
                    {t(`OSCILLOSCOPE.TOP_BUTTONS.TYPES.VALUES.${mode}`)}
                  </MenuItem>
                );
              },
            )}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
