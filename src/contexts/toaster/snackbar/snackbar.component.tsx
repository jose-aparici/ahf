import React, { Dispatch, SetStateAction } from 'react';

import { Snackbar, Typography } from '@material-ui/core';
import Alert, { Color } from '@material-ui/lab/Alert';

import { Notification } from 'domain/notification/notification.types';

import { useSnackBarComponentStyles } from './snackbar.component.styles';

export type Severity = 'success' | 'info' | 'warning' | 'error';

interface Props {
  show: boolean;
  onShow: Dispatch<SetStateAction<boolean>>;
  notification: Notification;
}

export const AhfSnackBarComponent: React.FC<Props> = ({
  show,
  onShow,
  notification,
}: Props) => {
  const classes = useSnackBarComponentStyles();
  const { text, severity } = notification;
  return (
    <Snackbar
      open={show}
      autoHideDuration={10000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      className={classes.root}
      onClose={() => onShow(false)}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={severity as Color}
        style={{ height: '20px', padding: '4px' }}
        classes={{ message: classes.alertMessage, icon: classes.alertIcon }}
      >
        <Typography className={classes.text}>{text}</Typography>
      </Alert>
    </Snackbar>
  );
};
