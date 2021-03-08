import { DeviceInfoAhf } from 'domain/ahf-device/ahf-device.types';
import { Device } from 'domain/device/device.types';

import { State } from './initialState';

export const deviceInfoReducer = (
  state: State,
  deviceInfo: DeviceInfoAhf,
): State => {
  state.devices[deviceInfo.ID] = {
    info: {
      company: deviceInfo.Company,
      fw: deviceInfo.FW,
      id: deviceInfo.ID,
      status: deviceInfo.Status,
      type: deviceInfo.Type,
    },
  } as Device;

  return {
    ...state,
  };
};
