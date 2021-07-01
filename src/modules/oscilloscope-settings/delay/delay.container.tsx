import { AhfContext } from 'contexts/store/context';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, Grid, TextField } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';
import { ParamType } from 'domain/param/param.types';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';

import { useDelayContainerStyles } from './delay.container.styles';

export const AhfDelayContainer: React.FC = () => {
  const classes = useDelayContainerStyles();
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AhfContext);
  const [editMode, setEditMode] = useState(false);
  const { delay } = state.oscilloscope.settings;

  const handleSave = (value: string) => {
    setEditMode(false);
    const settings = {
      ...state.oscilloscope.settings,
      delay: +value,
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
                  {`${t(
                    'OSCILLOSCOPE_SETTINGS.SECTIONS.DELAY.TITLE',
                  )} x???? = ${delay * 0.00125} ms`}
                </div>
              </div>
            }
            value={delay}
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
      {editMode && (
        <AhfParamEditContainerMemoized
          nameTitle={t('OSCILLOSCOPE_SETTINGS.SECTIONS.DELAY.TITLE')}
          type={ParamType.FLOATING_POINT}
          value={delay.toString()}
          onClose={() => setEditMode(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
};
