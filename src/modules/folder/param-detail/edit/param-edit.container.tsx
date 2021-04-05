import React, { useRef } from 'react';
import Keyboard from 'react-simple-keyboard';

import { Dialog, Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

import { Param } from 'domain/param/param.types';

import { AhfParamEditComponent } from './component/param-edit.component';
import { useParamEditContainerStyles } from './param-edit.container.styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

  const keyboardRef = useRef<Keyboard>();
  const handleParamChange = () => console.log('changed');

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AhfParamEditComponent
        param={param}
        onChange={handleParamChange}
        keyboardRef={keyboardRef}
      />
    </Dialog>
  );
};
