import React, { MutableRefObject, RefObject, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Keyboard from 'react-simple-keyboard';

import { FormControl, Grid, TextField } from '@material-ui/core';

import { ParamError } from 'domain/param/param.types';
import {
  LAYOUT_TYPE,
  LAYOUTS,
} from 'domain/virtual-keyboard/virtual-keyboard.constants';
import { AhfVirtualKeyboardComponent } from 'modules/shared/virtual-keyboard/virtual-keyboard.component';

import { useParamEditComponentStyles } from './param-edit.component.styles';

interface Props {
  value: string;
  isNumeric?: boolean;
  keyboardRef: RefObject<Keyboard>;
  onChange: (value: string) => void;
  onFocus: (value: string) => void;
  onEnter: () => void;
  error: ParamError | undefined;
}
export const AhfParamEditComponent: React.FC<Props> = ({
  value,
  isNumeric = false,
  keyboardRef,
  onChange,
  onFocus,
  onEnter,
  error,
}: Props) => {
  const classes = useParamEditComponentStyles();
  const { t } = useTranslation();

  useEffect(() => {
    keyboardRef?.current?.setInput(value);
  }, [value, keyboardRef]);

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <FormControl fullWidth>
          <TextField
            autoFocus
            value={value}
            variant="filled"
            type="string"
            onFocus={() => onFocus(value)}
            error={error ? true : false}
            helperText={error && t(error.text)}
            InputProps={{
              classes: {
                input: classes.inputField,
              },
            }}
          />
        </FormControl>
      </Grid>
      <Grid item className={classes.keyboardContainer}>
        <AhfVirtualKeyboardComponent
          keyboardRef={keyboardRef as MutableRefObject<Keyboard>}
          layout={isNumeric ? LAYOUTS[LAYOUT_TYPE.NUMERIC] : LAYOUTS.ENGLISH}
          onChange={onChange}
          onEnter={onEnter}
        />
      </Grid>
    </Grid>
  );
};
