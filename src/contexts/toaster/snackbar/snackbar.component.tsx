import React, { Dispatch, SetStateAction } from 'react';

import { Snackbar } from '@material-ui/core';
import Alert, { Color } from '@material-ui/lab/Alert';

export type Severity = 'success' | 'info' | 'warning' | 'error';

interface Props {
  show: boolean;
  onShow: Dispatch<SetStateAction<boolean>>;
  severity: string;
  message: string;
}

export const AhfSnackBarComponent: React.FC<Props> = ({
  show,
  onShow,
  severity,
  message,
}: Props) => {
  return (
    <Snackbar
      open={show}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={() => onShow(false)}
    >
      <Alert elevation={6} variant="filled" severity={severity as Color}>
        {message}
      </Alert>
    </Snackbar>
  );
};
