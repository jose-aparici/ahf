import { DeviceInfo, DeviceStructure } from 'domain/ahf/ahf.types';
import { Device } from 'domain/device/device.types';

import { Action } from './actions';
import { State } from './initialState';
import { DEVICE_INFO, DEVICE_STRUCTURE } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case DEVICE_INFO:
      const deviceInfo = payload as DeviceInfo;
      return {
        ...state,
        devices: {
          ...state.devices,
          [deviceInfo.ID]: {
            ...state.devices[deviceInfo.ID],
            info: payload,
          } as Device,
        },
      };

    case DEVICE_STRUCTURE:
      const deviceStructure = payload as DeviceStructure;
      return {
        ...state,
        devices: {
          ...state.devices,
          [deviceStructure.DeviceID]: {
            ...state.devices[deviceStructure.DeviceID],
            info: {
              ...state.devices[deviceStructure.DeviceID].info,
              Status: 1,
            },
          } as Device,
        },
      };

    default:
      return state;
  }
};
