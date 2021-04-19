import React, { MutableRefObject, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Keyboard from 'react-simple-keyboard';

import {
  Button,
  Dialog,
  DialogActions,
  FormControl,
  Grid,
  TextField,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

import { Param, ParamError, ParamType } from 'domain/param/param.types';
import { isNumericType, validateValue } from 'domain/param/param.utils';
import {
  LAYOUT_TYPE,
  LAYOUTS,
} from 'domain/virtual-keyboard/virtual-keyboard.constants';
import { AhfVirtualKeyboardComponent } from 'modules/shared/virtual-keyboard/virtual-keyboard.component';

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
  const { t } = useTranslation();

  const [input, setInput] = useState(param.value as string);
  const [error, setError] = useState<ParamError | undefined>(undefined);

  const handleParamChange = (value: string) => {
    setInput(value);
    setError(validateValue(param.paramType, value));
  };

  const handleValueFocus = (value: string) => {
    setError(validateValue(param.paramType, value));
  };

  const handleEnter = () => !error && onSave(input);

  const renderEditComponent = (type: ParamType) => {
    switch (type) {
      case ParamType.ENUM:
        return <div>enum</div>;
      case ParamType.FLOATING_POINT:
      case ParamType.UNSIGNED_INTEGER:
      case ParamType.SIGNED_INTEGER:
        return (
          <TextField
            autoFocus
            value={input}
            variant="filled"
            type="string"
            onFocus={() => handleValueFocus(input)}
            error={error ? true : false}
            helperText={error && t(error.text)}
          />
        );
      case ParamType.STRING:
      case ParamType.IP:
      case ParamType.MAC:
        return (
          <TextField
            autoFocus
            value={input}
            variant="filled"
            type="string"
            onFocus={() => handleValueFocus(input)}
            error={error ? true : false}
            helperText={error && t(error.text)}
          />
        );
      default:
        return (
          <TextField
            autoFocus
            value={input}
            variant="filled"
            type="string"
            onFocus={() => handleValueFocus(input)}
            error={error ? true : false}
            helperText={error && t(error.text)}
          />
        );
    }
  };

  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <FormControl fullWidth>
            {renderEditComponent(param.paramType)}
          </FormControl>
        </Grid>
        <Grid item className={classes.keyboardContainer}>
          <AhfVirtualKeyboardComponent
            keyboardRef={keyboardRef as MutableRefObject<Keyboard>}
            layout={
              isNumericType(param.paramType)
                ? LAYOUTS[LAYOUT_TYPE.NUMERIC]
                : LAYOUTS.ENGLISH
            }
            onChange={handleParamChange}
            onEnter={handleEnter}
          />
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
