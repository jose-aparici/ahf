import { DeviceInfo } from 'domain/ahf/ahf.types';
import { Device } from 'domain/device/device.types';

import { State } from './initialState';

export const deviceInfoReducer = (
  state: State,
  deviceInfo: DeviceInfo,
): State => {
  state.devices[deviceInfo.ID] = {
    info: deviceInfo,
  } as Device;

  return {
    ...state,
  };
};
