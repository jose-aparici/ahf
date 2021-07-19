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
  Status,
} from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { OSCILLOSCOPE, SETTINGS } from 'pages/App.routes';

import { useTopButtonsComponentStyles } from './top-buttons.component.styles';

interface Props {
  devicePath: string;
  currentMode: OscilloscopeMode;
  currentType: OscilloscopeType;
  isPlayStatus: boolean;
  onChangeMode: (mode: number) => void;
  onChangeType: (mode: number) => void;
  onToggleStatus: (status: Status) => void;
}

export const AhfTopButtonsComponent: React.FC<Props> = ({
  devicePath,
  currentMode,
  currentType,
  isPlayStatus,
  onChangeMode,
  onChangeType,
  onToggleStatus,
}: Props) => {
  const { t } = useTranslation();
  const classes = useTopButtonsComponentStyles();

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
          onClick={() =>
            onToggleStatus(isPlayStatus ? Status.iddle : Status.start)
          }
        >
          {isPlayStatus ? <PlayArrowIcon /> : <StopIcon />}
        </IconButton>
      </Grid>
      <Grid className={classes.typeSelector}>
        <FormControl>
          <Select
            labelId={`types`}
            id={`select-types`}
            value={currentType}
            onChange={(event) => onChangeType(event.target.value as number)}
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
            {[OscilloscopeMode.SINGLE, OscilloscopeMode.CONTINUOUS].map(
              (mode, index) => {
                return (
                  <MenuItem key={index} value={mode}>
                    {t(`OSCILLOSCOPE.TOP_BUTTONS.MODES.VALUES.${mode}`)}
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
