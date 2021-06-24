import React from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { Mode } from 'domain/oscilloscope-settings/oscilloscope-settings.types';

import { useModesComponentStyles } from './modes.component.styles';

interface Props {
  modes: Mode[];
  currentMode: Mode;
  onChange: (value: number) => void;
}

export const AhfModesComponent: React.FC<Props> = ({
  modes,
  currentMode,
  onChange,
}: Props) => {
  const classes = useModesComponentStyles();
  const { t } = useTranslation();
  return (
    <FormControl fullWidth>
      <InputLabel shrink id={`modes`} classes={{ root: classes.label }}>
        {t('OSCILLOSCOPE_SETTINGS.SECTIONS.MODES.TITLE')}
      </InputLabel>

      <Select
        labelId={`modes`}
        id={`select-modes`}
        value={currentMode}
        onChange={(event) => onChange(event.target.value as number)}
        MenuProps={{ classes: { paper: classes.menuPaper } }}
      >
        {modes.map((mode, index) => {
          return (
            <MenuItem key={index} value={mode}>
              {t(`OSCILLOSCOPE_SETTINGS.SECTIONS.MODES.VALUES.${mode}`)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
