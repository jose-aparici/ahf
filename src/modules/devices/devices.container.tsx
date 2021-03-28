import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { DeviceInfo } from 'domain/device/device.types';
import { DEVICES } from 'pages/App.routes';

import { AhfDeviceCardComponent } from './card/device-card.component';
import { useDevicesContainerStyles } from './devices-container.styles';

export const AhfDevicesContainer: React.FC = () => {
  const classes = useDevicesContainerStyles();
  const { state } = useContext(AhfContext);
  const { stopUpdate, scan } = useSocketHook();
  const history = useHistory();

  const handleClickDevice = (id: number, status: number) => {
    status > 0 && history.push(`${DEVICES}/${id}`);
  };

  useEffect(() => {
    stopUpdate();
    scan();
  }, [stopUpdate, scan]);

  return (
    <div className={classes.root}>
      {Object.keys(state.devices).map((deviceKey, index) => {
        const deviceInfo = state.devices[+deviceKey].info as DeviceInfo;
        return (
          <AhfDeviceCardComponent
            key={index}
            deviceInfo={deviceInfo}
            onClickDevice={handleClickDevice}
          />
        );
      })}
    </div>
  );
};
