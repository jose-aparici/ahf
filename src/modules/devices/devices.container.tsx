import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AhfContext } from 'store/context';

import {
  Avatar,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import { DeviceInfo } from 'domain/device/device.types';
import { AppRoutes } from 'pages/App.routes';

import { useDevicesContainerStyles } from './devices-container.styles';

export const AhfDevicesContainer: React.FC = () => {
  const classes = useDevicesContainerStyles();
  const { state } = useContext(AhfContext);
  const { stopUpdate } = useSocketHook();
  const history = useHistory();

  const handleClickDevice = (id: number, status: number) => {
    status > 0 && history.push(`${AppRoutes.DevicesPage}/${id}`);
  };

  useEffect(() => {
    stopUpdate();
  }, [stopUpdate]);

  return (
    <div className={classes.root}>
      {Object.keys(state.devices).map((deviceKey, index) => {
        const deviceInfo = state.devices[+deviceKey].info as DeviceInfo;
        return (
          <Card
            key={index}
            variant="elevation"
            onClick={() => handleClickDevice(deviceInfo.ID, deviceInfo.Status)}
          >
            <CardContent className={classes.contentContainer}>
              <div className={classes.infoContainer}>
                <Avatar
                  className={classes.avatar}
                  src="/assets/images/AHFViewer1.ico"
                ></Avatar>
                <Typography>{deviceInfo.Type}</Typography>
                {deviceInfo.Status === 0 ? (
                  <CircularProgress size={20} color="secondary" />
                ) : (
                  <CheckCircleOutlineIcon htmlColor={'green'} />
                )}
              </div>
              <div className={classes.unitContainer}>
                <Typography component="h1" className={classes.value}>
                  {deviceInfo.FW}
                </Typography>
                <Typography className={classes.unit}>
                  MbId {deviceInfo.ID}
                </Typography>
              </div>
              <Typography>{deviceInfo.Company}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
