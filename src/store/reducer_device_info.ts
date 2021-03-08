import { DeviceInfo, DeviceNodes } from 'domain/device/device.types';

import { State } from './initialState';

export const deviceInfoReducer = (
  state: State,
  deviceInfo: DeviceInfo,
): State => {
  state.devices[deviceInfo.ID] = {
    info: deviceInfo,
  } as DeviceNodes;

  return {
    ...state,
  };
};
