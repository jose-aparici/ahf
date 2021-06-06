import { AhfContext } from 'contexts/store/context';
import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { DeviceInfo } from 'domain/device/device.types';

import { AhfDeviceCardComponent } from './card/device-card.component';
import { useDevicesContainerStyles } from './devices-container.styles';

export const AhfDevicesContainer: React.FC = () => {
  const classes = useDevicesContainerStyles();
  const { state } = useContext(AhfContext);
  const { stopUpdate, readIniFile } = useSocketHook();
  const history = useHistory();

  const handleClickDevice = (id: number) => {
    if (
      state.devices[id].structure &&
      state.devices[id].structure.isMainFolder
    ) {
      if (state.devices[id].info.status > 1) {
        history.push(state.devices[id].structure.id);
      }
    }

    if (state.devices[id].info.status === 0) {
      readIniFile(id.toString());
    }
  };

  useEffect(() => {
    stopUpdate();
  }, [stopUpdate]);

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
