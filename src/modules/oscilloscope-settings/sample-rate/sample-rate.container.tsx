import { AhfContext } from 'contexts/store/context';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, TextField } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';
import { ParamType } from 'domain/param/param.types';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';

import { useSampleRateContainerStyles } from './sample-rate.container.styles';

export const AhfSampleRateContainer: React.FC = () => {
  const classes = useSampleRateContainerStyles();
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AhfContext);
  const [editMode, setEditMode] = useState(false);

  const { sampleRate } = state.oscilloscope.settings;

  const handleSave = (value: string) => {
    setEditMode(false);
    const settings = {
      ...state.oscilloscope.settings,
      sampleRate: +value,
    };
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: { settings },
    });
  };

  return (
    <>
      <FormControl fullWidth>
        <TextField
          label={
            <div className={classes.labelContainer}>
              <div>
                {`${t(
                  'OSCILLOSCOPE_SETTINGS.SECTIONS.SAMPLE_PERIOD.TITLE',
                )} x0.00125 = ${sampleRate * 0.00125} ms`}
              </div>
            </div>
          }
          value={sampleRate}
          onClick={() => setEditMode(true)}
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
          nameTitle={t('OSCILLOSCOPE_SETTINGS.SECTIONS.SAMPLE_PERIOD.TITLE')}
          type={ParamType.FLOATING_POINT}
          value={sampleRate.toString()}
          onClose={() => setEditMode(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
};
