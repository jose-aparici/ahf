import { ReactComponent as AhfHarmonicFilterSvg } from 'images/harmonic_filter.svg';
import { ReactComponent as SyncModuleSvg } from 'images/sync_module.svg';
import React from 'react';

import {
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { DeviceInfo, DeviceType } from 'domain/device/device.types';

import { useAhfDeviceCardComponentStyles } from './device-card.component.styles';

interface Props {
  deviceInfo: DeviceInfo;
  onClickDevice: (id: number) => void;
}

export const AhfDeviceCardComponent: React.FC<Props> = ({
  deviceInfo,
  onClickDevice,
}: Props) => {
  const classes = useAhfDeviceCardComponentStyles();
  return (
    <Card
      variant="elevation"
      onClick={() => onClickDevice(deviceInfo.id)}
      className={classes.root}
    >
      <CardContent className={classes.contentContainer}>
        <div className={classes.titleContainer}>
          <Typography variant="h2">
            {deviceInfo.type} - {deviceInfo.id.toString().padStart(3, '0')}
          </Typography>
          {deviceInfo.status === 0 ? (
            <CircularProgress size={24} color="primary" />
          ) : (
            <CheckCircleIcon fontSize="large" htmlColor={'#42be65'} />
          )}
        </div>
        <div className={classes.infoContainer}>
          <Typography variant="h3">{deviceInfo.fw}</Typography>
          <div className={classes.deviceIconContainer}>
            {deviceInfo.type === DeviceType.ACTIVE_HARMONIC_FILER ? (
              <AhfHarmonicFilterSvg />
            ) : (
              <SyncModuleSvg />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
