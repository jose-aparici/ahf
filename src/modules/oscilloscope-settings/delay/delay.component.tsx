import React from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, TextField } from '@material-ui/core';

import { ParamType } from 'domain/param/param.types';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';

import { useDelayComponentStyles } from './delay.component.styles';

interface Props {
  delay: number;
  editMode: boolean;
  setEditMode: () => void;
  onSave: (value: string) => void;
}

export const AhfDelayComponent: React.FC<Props> = ({
  delay,
  editMode,
  onSave,
  setEditMode,
}: Props) => {
  const classes = useDelayComponentStyles();
  const { t } = useTranslation();
  return (
    <>
      <FormControl fullWidth>
        <TextField
          label={
            <div className={classes.labelContainer}>
              <div>
                {`${t('OSCILLOSCOPE_SETTINGS.SECTIONS.DELAY.TITLE')} x???? = ${
                  delay * 0.00125
                } ms`}
              </div>
            </div>
          }
          value={delay}
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
          nameTitle={t('OSCILLOSCOPE_SETTINGS.SECTIONS.DELAY.TITLE')}
          type={ParamType.FLOATING_POINT}
          value={delay.toString()}
          onClose={setEditMode}
          onSave={onSave}
        />
      )}
    </>
  );
};
