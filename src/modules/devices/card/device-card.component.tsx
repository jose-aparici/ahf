import React from 'react';

import {
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioIcon from '@material-ui/icons/Radio';

import { DeviceInfo } from 'domain/device/device.types';

import { useAhfDeviceCardComponentStyles } from './device-card.component.styles';

interface Props {
  deviceInfo: DeviceInfo;
  onClickDevice: (id: number, status: number) => void;
}

export const AhfDeviceCardComponent: React.FC<Props> = ({
  deviceInfo,
  onClickDevice,
}: Props) => {
  const classes = useAhfDeviceCardComponentStyles();
  return (
    <Card
      variant="elevation"
      onClick={() => onClickDevice(deviceInfo.id, deviceInfo.status)}
    >
      <CardContent className={classes.contentContainer}>
        <div className={classes.infoContainer}>
          <Typography component="h1" className={classes.value}>
            {deviceInfo.fw}
          </Typography>
          {deviceInfo.status === 0 ? (
            <CircularProgress size={24} color="primary" />
          ) : (
            <CheckCircleIcon fontSize="large" htmlColor={'green'} />
          )}
        </div>
        <Typography className={classes.unit}>MbId {deviceInfo.id}</Typography>
        <div className={classes.deviceIconContainer}>
          <RadioIcon className={classes.deviceIcon} />
        </div>
      </CardContent>
    </Card>
  );
};
