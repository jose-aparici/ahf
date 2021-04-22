import i18n from 'i18n';
import React, { MutableRefObject, useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  Grid,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param, ParamError, ParamType } from 'domain/param/param.types';
import {
  isKeyboardType,
  isNumericType,
  validateValue,
} from 'domain/param/param.utils';
import {
  LAYOUT_TYPE,
  LAYOUTS,
} from 'domain/virtual-keyboard/virtual-keyboard.constants';
import { AhfVirtualKeyboardComponent } from 'modules/shared/virtual-keyboard/virtual-keyboard.component';

import { AhfParamEditFieldComponent } from './components/field/param-edit-field.component';
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

  const [input, setInput] = useState(param.value as string);
  const [error, setError] = useState<ParamError | undefined>(undefined);

  const handleParamChange = (value: string) => {
    setInput(value);
    setError(validateValue(param.paramType, value));
  };

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const handleValueFocus = (value: string) => {
    setError(validateValue(param.paramType, value));
  };

  const handleEnter = () => !error && onSave(input);

  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm">
      {!isKeyboardType(param.paramType) && param.paramType !== ParamType.DATE && (
        <DialogTitle>
          {param.name[currentLanguage]}
          {param.paramType}
        </DialogTitle>
      )}
      <Grid container direction="column" className={classes.mainGrid}>
        <Grid item>
          <FormControl fullWidth>
            <AhfParamEditFieldComponent
              type={param.paramType}
              value={input}
              values={param.paramEnumText}
              error={error}
              onFocus={handleValueFocus}
              onChange={handleParamChange}
            />
          </FormControl>
        </Grid>
        <Grid item className={classes.keyboardContainer}>
          {isKeyboardType(param.paramType) && (
            <AhfVirtualKeyboardComponent
              keyboardRef={keyboardRef as MutableRefObject<Keyboard>}
              layout={
                isNumericType(param.paramType)
                  ? LAYOUTS[LAYOUT_TYPE.NUMERIC]
                  : LAYOUTS.ENGLISH
              }
              onChange={handleParamChange}
              onEnter={handleEnter}
              input={input}
            />
          )}
        </Grid>
      </Grid>

      <DialogActions>
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
    </Dialog>
  );
};
