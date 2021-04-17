import React, { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { Button, Dialog, DialogActions } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

import { Param, ParamType } from 'domain/param/param.types';

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

  const handleParamChange = (value: string) => setInput(value);

  const handleEnter = () => onSave(input);

  const renderEditComponent = (type: ParamType) => {
    switch (type) {
      case ParamType.ENUM:
        return <div>enum</div>;
      case ParamType.SINGLE_PRECISION_FLOATING_POINT:
        return (
          <AhfParamEditComponent
            value={input}
            isNumeric
            onChange={handleParamChange}
            onEnter={handleEnter}
            keyboardRef={keyboardRef}
          />
        );
      case ParamType.UNSIGNED_INTEGER_16:
        return (
          <AhfParamEditComponent
            value={input}
            isNumeric
            onChange={handleParamChange}
            onEnter={handleEnter}
            keyboardRef={keyboardRef}
          />
        );
      case ParamType.UNSIGNED_INTEGER_32:
        return (
          <AhfParamEditComponent
            value={input}
            isNumeric
            onChange={handleParamChange}
            onEnter={handleEnter}
            keyboardRef={keyboardRef}
          />
        );
      case ParamType.UNSIGNED_INTEGER_8:
        return (
          <AhfParamEditComponent
            value={input}
            isNumeric
            onChange={handleParamChange}
            onEnter={handleEnter}
            keyboardRef={keyboardRef}
          />
        );
      case ParamType.VISIBLE_STRING:
        return (
          <AhfParamEditComponent
            value={input}
            onChange={handleParamChange}
            onEnter={handleEnter}
            keyboardRef={keyboardRef}
          />
        );
      default:
        return (
          <AhfParamEditComponent
            value={input}
            onChange={handleParamChange}
            onEnter={handleEnter}
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
