import { AhfDeviceInfo } from 'domain/ahf-device/ahf-device.types';
import { Device, DeviceType } from 'domain/device/device.types';

import { State } from './initialState';

export const deviceInfoReducer = (
  state: State,
  deviceInfo: AhfDeviceInfo,
): State => {
  state.devices[deviceInfo.ID] = {
    info: {
      company: deviceInfo.Company,
      fw: deviceInfo.FW,
      id: deviceInfo.ID,
      status: deviceInfo.Status,
      type: (deviceInfo.Type as unknown) as DeviceType,
      typeName: deviceInfo.TypeName,
    },
    structure:
      state.devices[deviceInfo.ID] && state.devices[deviceInfo.ID].structure
        ? state.devices[deviceInfo.ID].structure
        : {},
    paths:
      state.devices[deviceInfo.ID] && state.devices[deviceInfo.ID].paths
        ? state.devices[deviceInfo.ID].paths
        : {},
  } as Device;

  return {
    ...state,
  };
};
