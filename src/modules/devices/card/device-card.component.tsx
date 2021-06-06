import { ReactComponent as AhfHarmonicFilterSvg } from 'images/harmonic_filter.svg';
import { ReactComponent as SyncModuleSvg } from 'images/sync_module.svg';
import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DescriptionIcon from '@material-ui/icons/Description';
import PowerOffIcon from '@material-ui/icons/PowerOff';

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
          <Typography variant="h2">{`${
            deviceInfo.typeName
          } - ${deviceInfo.id.toString().padStart(3, '0')}`}</Typography>

          {deviceInfo.status === 0 && (
            <DescriptionIcon fontSize="large" htmlColor="orange" />
          )}
          {deviceInfo.status === 1 && (
            <CircularProgress size={35} thickness={2} color="primary" />
          )}
          {deviceInfo.status === 2 && (
            <PowerOffIcon fontSize="large" htmlColor="grey" />
          )}
          {deviceInfo.status === 3 && (
            <CheckCircleIcon fontSize="large" htmlColor={'#42be65'} />
          )}
        </div>

        <Typography
          variant="h3"
          display="inline"
          className={classes.titleVersion}
        >
          {deviceInfo.fw}
        </Typography>
      </CardContent>
      <CardActions classes={{ root: classes.iconContainer }}>
        {deviceInfo.type === DeviceType.ACTIVE_HARMONIC_FILER ? (
          <AhfHarmonicFilterSvg />
        ) : (
          <SyncModuleSvg />
        )}
      </CardActions>
    </Card>
  );
};
