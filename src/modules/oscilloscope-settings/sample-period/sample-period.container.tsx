import { AhfContext } from 'contexts/store/context';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, Grid, TextField, Typography } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';
import { ParamType } from 'domain/param/param.types';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';

import { useSamplePeriodContainerStyles } from './sample-period.container.styles';

export const AhfSamplePeriodContainer: React.FC = () => {
  const classes = useSamplePeriodContainerStyles();
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AhfContext);
  const [editMode, setEditMode] = useState(false);

  const { samplePeriod } = state.oscilloscope.settings;

  const handleSave = (value: string) => {
    setEditMode(false);
    const settings = {
      ...state.oscilloscope.settings,
      samplePeriod: +value,
    };
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: { settings },
    });
  };

  return (
    <>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <TextField
            label={
              <div className={classes.labelContainer}>
                <div>
                  {t('OSCILLOSCOPE_SETTINGS.SECTIONS.SAMPLE_PERIOD.TITLE')}
                </div>
              </div>
            }
            value={samplePeriod}
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
      </Grid>
      <Grid container item xs={4} alignItems="flex-end">
        <Typography className={classes.total}>{`x 0.00125 = ${
          samplePeriod * 0.00125
        } ms`}</Typography>
      </Grid>

      {editMode && (
        <AhfParamEditContainerMemoized
          nameTitle={t('OSCILLOSCOPE_SETTINGS.SECTIONS.SAMPLE_PERIOD.TITLE')}
          type={ParamType.FLOATING_POINT}
          value={samplePeriod.toString()}
          onClose={() => setEditMode(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
};
