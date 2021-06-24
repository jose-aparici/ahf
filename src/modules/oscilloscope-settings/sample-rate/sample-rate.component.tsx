import React from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, TextField } from '@material-ui/core';

import { ParamType } from 'domain/param/param.types';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';

import { useSampleRateComponentStyles } from './sample-rate.component.styles';

interface Props {
  sampleRate: number;
  editMode: boolean;
  setEditMode: () => void;
  onSave: (value: string) => void;
}

export const AhfSampleRateComponent: React.FC<Props> = ({
  sampleRate,
  editMode,
  onSave,
  setEditMode,
}: Props) => {
  const classes = useSampleRateComponentStyles();
  const { t } = useTranslation();
  return (
    <>
      <FormControl fullWidth>
        <TextField
          label={
            <div className={classes.labelContainer}>
              <div>
                {`${t(
                  'OSCILLOSCOPE_SETTINGS.SECTIONS.SAMPLE_RATE.TITLE',
                )} x0.00125 = ${sampleRate * 0.00125} ms`}
              </div>
            </div>
          }
          value={sampleRate}
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
          nameTitle={t('OSCILLOSCOPE_SETTINGS.SECTIONS.SAMPLE_RATE.TITLE')}
          type={ParamType.FLOATING_POINT}
          value={sampleRate.toString()}
          onClose={setEditMode}
          onSave={onSave}
        />
      )}
    </>
  );
};
