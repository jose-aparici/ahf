import React from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { Param } from 'domain/param/param.types';

import { useTriggerLevelComponentStyles } from './trigger-level.component.styles';

interface Props {
  params: Param[];
  trigger: Param;
  currentLanguage: number;
  onTriggerChange: (value: number) => void;
}

export const AhfTriggerLevelComponent: React.FC<Props> = ({
  params,
  trigger,
  currentLanguage,
  onTriggerChange,
}: Props) => {
  const classes = useTriggerLevelComponentStyles();
  const { t } = useTranslation();
  return (
    <FormControl fullWidth>
      <InputLabel shrink id={`trigger_level`} classes={{ root: classes.label }}>
        {t('OSCILLOSCOPE_SETTINGS.SECTIONS.TRIGGER_LEVEL.TITLE')}
      </InputLabel>

      <Select
        labelId={`trigger_level`}
        id={`select-trigger_level`}
        value={trigger.paramId}
        onChange={(event) => onTriggerChange(event.target.value as number)}
        MenuProps={{ classes: { paper: classes.menuPaper } }}
      >
        {params.map((param, index) => {
          return (
            <MenuItem key={index} value={param.paramId}>
              {`${param.paramId} ${param.name[currentLanguage]}`}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
