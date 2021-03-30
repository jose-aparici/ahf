import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { DeviceInfo } from 'domain/device/device.types';

import { AhfDeviceCardComponent } from './card/device-card.component';
import { useDevicesContainerStyles } from './devices-container.styles';

export const AhfDevicesContainer: React.FC = () => {
  const classes = useDevicesContainerStyles();
  const { state } = useContext(AhfContext);
  const { stopUpdate, scan } = useSocketHook();
  const history = useHistory();

  const handleClickDevice = (id: number) => {
    state.devices[id].info.status > 0 &&
      state.devices[id].structure &&
      state.devices[id].structure.isMainFolder &&
      history.push(state.devices[id].structure.id);
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
