import React from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
          <Avatar
            className={classes.avatar}
            src="/assets/images/AHFViewer1.ico"
          ></Avatar>
          <Typography>{deviceInfo.type}</Typography>
          {deviceInfo.status === 0 ? (
            <CircularProgress size={20} color="secondary" />
          ) : (
            <CheckCircleOutlineIcon htmlColor={'green'} />
          )}
        </div>
        <div className={classes.unitContainer}>
          <Typography component="h1" className={classes.value}>
            {deviceInfo.fw}
          </Typography>
          <Typography className={classes.unit}>MbId {deviceInfo.id}</Typography>
        </div>
        <Typography>{deviceInfo.company}</Typography>
      </CardContent>
    </Card>
  );
};
