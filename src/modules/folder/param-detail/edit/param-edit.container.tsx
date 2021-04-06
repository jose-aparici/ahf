import React, { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { Button, Dialog, DialogActions } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

import { Param } from 'domain/param/param.types';

import { AhfParamEditComponent } from './component/param-edit.component';
import { useParamEditContainerStyles } from './param-edit.container.styles';

interface Props {
  param: Param;
  isOpen: boolean;
  onClose: () => void;
}

export const AhfParamEditContainer: React.FC<Props> = ({
  param,
  isOpen,
  onClose,
}: Props) => {
  const classes = useParamEditContainerStyles();

  const keyboardRef = useRef<Keyboard>(null);

  const [input, setInput] = useState(param.value as string);

  const handleParamChange = (value: string) => setInput(value);

  const handleEnter = () => {
    console.log('entra', input);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <AhfParamEditComponent
        value={input}
        onChange={handleParamChange}
        onEnter={handleEnter}
        keyboardRef={keyboardRef}
      />
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<CancelIcon />}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
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
