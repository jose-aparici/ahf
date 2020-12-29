import { DeviceStructure } from 'domain/ahf/ahf.types';
import { Device } from 'domain/device/device.types';

import { State } from './initialState';

export const deviceStructureReducer = (
  state: State,
  deviceStructure: DeviceStructure,
): State => {
  return state.devices[deviceStructure.DeviceID] &&
    state.devices[deviceStructure.DeviceID].info
    ? {
        ...state,
        devices: {
          ...state.devices,
          [deviceStructure.DeviceID]: {
            ...state.devices[deviceStructure.DeviceID],
            info: {
              ...state.devices[deviceStructure.DeviceID].info,
              Status: 1,
            },
            structure: deviceStructure,
          } as Device,
        },
      }
    : state;
};
