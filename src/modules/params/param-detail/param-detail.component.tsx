import React from 'react';

import { FormControl, Input, InputLabel, TextField } from '@material-ui/core';

import { Param, ParamValue } from 'domain/param/param.types';

import { AhfParamInputComponent } from '../param-input/param-input.component';
import { useParamDetailComponentStyles } from './param-detail.component.styles';

interface Props {
  param: Param;
  value: ParamValue;
  language: number;
  onValueChange: (value: string) => void;
  onToggleKeyboard: (showKeyboard: boolean) => void;
}

export const AhfParamDetailComponent: React.FC<Props> = ({
  param,
  value,
  language,
  onValueChange,
  onToggleKeyboard,
}: Props) => {
  const classes = useParamDetailComponentStyles();
  return (
    <div className={classes.root}>
      <FormControl disabled fullWidth>
        <InputLabel>Number</InputLabel>
        <Input value={param.paramId} />
      </FormControl>
      <FormControl disabled fullWidth>
        <InputLabel>Name</InputLabel>
        <Input value={param.name[language]} />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Value</InputLabel>
        <AhfParamInputComponent
          type={param.paramType}
          value={value}
          selectValues={param.paramEnumText}
          onBlur={onToggleKeyboard}
          onFocus={onToggleKeyboard}
          onValueChange={onValueChange}
        />
      </FormControl>

      <div>
        <FormControl disabled fullWidth>
          <TextField
            label="Description"
            value={param.description[language]}
            margin="normal"
            variant="outlined"
            multiline
          />
        </FormControl>
      </div>
    </div>
  );
};
