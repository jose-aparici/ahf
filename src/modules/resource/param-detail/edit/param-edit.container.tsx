import i18n from 'i18n';
import React, { useCallback, useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  Grid,
  GridList,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param, ParamError, ParamType } from 'domain/param/param.types';
import { validateValue } from 'domain/param/param.utils';

import { AhfParamEditFieldComponentMemoized } from './components/field/param-edit-field.component';
import { useParamEditContainerStyles } from './param-edit.container.styles';

interface Props {
  param: Param;
  onClose: () => void;
  onSave: (value: string) => void;
}

export const AhfParamEditContainer: React.FC<Props> = ({
  param,
  onClose,
  onSave,
}: Props) => {
  const classes = useParamEditContainerStyles();
  const keyboardRef = useRef<Keyboard>(null);

  const [input, setInput] = useState(() => {
    if (param.paramType === ParamType.ENUM) {
      return param.paramEnumText
        .findIndex((item) => item === param.value)
        .toString();
    }

    return param.value as string;
  });
  const [error, setError] = useState<ParamError | undefined>(undefined);

  const handleParamChange = useCallback(
    (value: string) => {
      setInput(value);
      setError(validateValue(param.paramType, value));
    },
    [param.paramType],
  );

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const handleValueFocus = useCallback(
    (value: string) => {
      setError(validateValue(param.paramType, value));
    },
    [param.paramType],
  );

  const handleEnter = () => !error && onSave(input);

  return (
    <Dialog
      open={true}
      onClose={onClose}
      classes={{ paper: classes.dialogContainer }}
    >
      <Grid container className={classes.mainGrid}>
        <Grid item xs className={classes.leftGrid}>
          <div className={classes.leftContainer}>
            <DialogTitle className={classes.title}>
              {param.name[currentLanguage]}
            </DialogTitle>
            <DialogActions className={classes.buttons}>
              <Button
                variant="contained"
                size="large"
                startIcon={<CancelIcon />}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleEnter}
              >
                Save
              </Button>
            </DialogActions>
          </div>
        </Grid>
        <Grid item xs justify="space-around">
          {param.paramType === ParamType.ENUM && (
            <GridList cols={1} className={classes.gridList}>
              <FormControl
                style={{ height: '100%' }}
                className={classes.formControl}
              >
                <AhfParamEditFieldComponentMemoized
                  type={param.paramType}
                  value={input}
                  values={param.paramEnumText}
                  error={error}
                  onFocus={handleValueFocus}
                  onChange={handleParamChange}
                />
              </FormControl>
            </GridList>
          )}
        </Grid>
      </Grid>
    </Dialog>
  );
};
