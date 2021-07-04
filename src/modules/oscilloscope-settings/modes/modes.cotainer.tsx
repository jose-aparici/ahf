import { AhfContext } from 'contexts/store/context';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';
import { Mode } from 'domain/oscilloscope-settings/oscilloscope-settings.types';

import { useModesContainerStyles } from './modes.container.styles';

export const AhfModesContainer: React.FC = () => {
  const classes = useModesContainerStyles();
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AhfContext);
  const { mode: currentMode } = state.oscilloscope.settings;

  const handleSave = (value: number) => {
    const settings = {
      ...state.oscilloscope.settings,
      triggerMode: value,
    };
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: { settings },
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel shrink id={`modes`} classes={{ root: classes.label }}>
        {t('OSCILLOSCOPE_SETTINGS.SECTIONS.MODES.TITLE')}
      </InputLabel>

      <Select
        labelId={`modes`}
        id={`select-modes`}
        value={currentMode}
        onChange={(event) => handleSave(event.target.value as number)}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
          style: { maxHeight: '400px' },
        }}
      >
        {[Mode.LESS_THAN, Mode.MORE_THAN].map((mode, index) => {
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
