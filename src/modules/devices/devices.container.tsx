import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AhfContext } from 'store/context';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@material-ui/core';

import { DeviceInfo } from 'domain/ahf/ahf.types';
import { AppRoutes } from 'pages/App.routes';

import { useDevicesContainerStyles } from './devices-container.styles';

export const AhfDevicesContainer: React.FC = () => {
  const classes = useDevicesContainerStyles();
  const { state } = useContext(AhfContext);
  const history = useHistory();

  const handleClickDevice = (id: number, status: number) => {
    status > 0 && history.push(`${AppRoutes.DevicesPage}/${id}`);
  };

  return (
    <div className={classes.root}>
      {Object.keys(state.devices).map((deviceKey, index) => {
        const deviceInfo = state.devices[+deviceKey].info as DeviceInfo;
        return (
          <Card
            key={index}
            onClick={() => handleClickDevice(deviceInfo.ID, deviceInfo.Status)}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/assets/images/AHFViewer1.ico"
                title="Contemplative Reptile"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {deviceInfo.ID} {deviceInfo.Type}
                </Typography>
                {deviceInfo.Status === 0 && <CircularProgress />}
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};
