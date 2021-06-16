import clsx from 'clsx';
import React from 'react';

import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useSpinnerComponentStyles } from './spinner.component.styles';

interface Props {
  open: boolean;
  isModal: boolean;
}

export const AhfSpinnerComponent: React.FC<Props> = ({
  open,
  isModal,
}: Props) => {
  const classes = useSpinnerComponentStyles();
  return (
    <Backdrop
      className={clsx(
        classes.root,
        isModal ? classes.blocking : classes.nonBlocking,
      )}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
