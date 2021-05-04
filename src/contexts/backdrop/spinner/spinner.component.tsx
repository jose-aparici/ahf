import React from 'react';

import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useSpinnerComponentStyles } from './spinner.component.styles';

interface Props {
  open: boolean;
}

export const AhfSpinnerComponent: React.FC<Props> = ({ open }: Props) => {
  const classes = useSpinnerComponentStyles();
  return (
    <>
      {open && (
        <Backdrop className={classes.root} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};
