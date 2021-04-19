import React, { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { Button, Dialog, DialogActions } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

import { Param, ParamError, ParamType } from 'domain/param/param.types';
import { validateValue } from 'domain/param/param.utils';

import { AhfParamEditComponent } from './component/param-edit.component';

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
  const keyboardRef = useRef<Keyboard>(null);

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
        return (
          <AhfParamEditComponent
            value={input}
            isNumeric
            onChange={handleParamChange}
            onFocus={handleValueFocus}
            onEnter={handleEnter}
            error={error}
            keyboardRef={keyboardRef}
          />
        );
      case ParamType.UNSIGNED_INTEGER:
        return (
          <AhfParamEditComponent
            value={input}
            isNumeric
            onChange={handleParamChange}
            onFocus={handleValueFocus}
            onEnter={handleEnter}
            error={error}
            keyboardRef={keyboardRef}
          />
        );
      case ParamType.SIGNED_INTEGER:
        return (
          <AhfParamEditComponent
            value={input}
            isNumeric
            onChange={handleParamChange}
            onFocus={handleValueFocus}
            onEnter={handleEnter}
            error={error}
            keyboardRef={keyboardRef}
          />
        );
      case ParamType.STRING:
        return (
          <AhfParamEditComponent
            value={input}
            onChange={handleParamChange}
            onFocus={handleValueFocus}
            error={error}
            onEnter={handleEnter}
            keyboardRef={keyboardRef}
          />
        );
      default:
        return (
          <AhfParamEditComponent
            value={input}
            onChange={handleParamChange}
            onFocus={handleValueFocus}
            onEnter={handleEnter}
            error={error}
            keyboardRef={keyboardRef}
          />
        );
    }
  };

  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      {renderEditComponent(param.paramType)}
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
