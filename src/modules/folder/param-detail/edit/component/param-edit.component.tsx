import React, { MutableRefObject, RefObject, useEffect } from 'react';
import Keyboard from 'react-simple-keyboard';

import { FormControl, Grid, InputLabel, TextField } from '@material-ui/core';

import { AhfVirtualKeyboardComponent } from 'modules/shared/virtual-keyboard/virtual-keyboard.component';

import { useParamEditComponentStyles } from './param-edit.component.styles';

interface Props {
  value: string;
  keyboardRef: RefObject<Keyboard>;
  onChange: (value: string) => void;
  onEnter: () => void;
}
export const AhfParamEditComponent: React.FC<Props> = ({
  value,
  keyboardRef,
  onChange,
  onEnter,
}: Props) => {
  const classes = useParamEditComponentStyles();

  useEffect(() => {
    keyboardRef?.current?.setInput(value);
  }, [value, keyboardRef]);

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel>Value</InputLabel>
          <TextField
            autoFocus
            multiline
            value={value}
            variant="outlined"
            type="string"
          />
        </FormControl>
      </Grid>
      <Grid item className={classes.keyboardContainer}>
        <AhfVirtualKeyboardComponent
          keyboardRef={keyboardRef as MutableRefObject<Keyboard>}
          onChange={onChange}
          onEnter={onEnter}
        />
      </Grid>
    </Grid>
  );
};
