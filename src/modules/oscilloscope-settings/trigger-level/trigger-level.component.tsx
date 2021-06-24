import React from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, TextField } from '@material-ui/core';

import { ParamType } from 'domain/param/param.types';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';

import { useTriggerLevelComponentStyles } from './trigger-level.component.styles';

interface Props {
  triggerLevel: number;
  editMode: boolean;
  setEditMode: () => void;
  onSave: (value: string) => void;
}

export const AhfTriggerLevelComponent: React.FC<Props> = ({
  triggerLevel,
  editMode,
  onSave,
  setEditMode,
}: Props) => {
  const classes = useTriggerLevelComponentStyles();
  const { t } = useTranslation();
  return (
    <>
      <FormControl fullWidth>
        <TextField
          label={
            <div className={classes.labelContainer}>
              <div>
                {t('OSCILLOSCOPE_SETTINGS.SECTIONS.TRIGGER_LEVEL.TITLE')}
              </div>
            </div>
          }
          value={triggerLevel}
          onClick={setEditMode}
          placeholder=""
          InputLabelProps={{
            shrink: true,
            classes: {
              root: classes.label,
            },
          }}
        />
      </FormControl>
      {editMode && (
        <AhfParamEditContainerMemoized
          nameTitle={t('OSCILLOSCOPE_SETTINGS.SECTIONS.TRIGGER_LEVEL.TITLE')}
          type={ParamType.FLOATING_POINT}
          value={triggerLevel.toString()}
          onClose={setEditMode}
          onSave={onSave}
        />
      )}
    </>
  );
};
