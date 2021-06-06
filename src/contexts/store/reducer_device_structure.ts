import { flatten } from 'flattree';

import { transformDeviceStructureToFolder } from 'domain/ahf-device-structure/ahf-device-structure.utils';
import { AhfDeviceStructure } from 'domain/ahf-device/ahf-device.types';
import { SETTINGS_DEVICE_ID } from 'domain/settings/settings.contants';

import { State } from './initialState';

const hasInitalDevice = (state: State): boolean => {
  if (state.initialDevice >= 0) {
    return true;
  }
  const exists = Object.entries(state.devices).find(
    (device) => device[1].structure.id !== undefined,
  );

  return exists === undefined ? false : true;
};

export const deviceStructureReducer = (
  state: State,
  deviceStructure: AhfDeviceStructure,
): State => {
  if (
    !hasInitalDevice(state) &&
    deviceStructure.DeviceID !== SETTINGS_DEVICE_ID
  ) {
    state.initialDevice = deviceStructure.DeviceID;
  }

  if (
    state.devices[deviceStructure.DeviceID] &&
    state.devices[deviceStructure.DeviceID].info
  ) {
    state.devices[deviceStructure.DeviceID].paths = {};

    state.devices[deviceStructure.DeviceID].structure = flatten(
      transformDeviceStructureToFolder(
        deviceStructure,
        state.devices[deviceStructure.DeviceID].paths,
      ),
    )[0];
  }

  if (deviceStructure.DeviceID === SETTINGS_DEVICE_ID) {
    state.settings = flatten(
      transformDeviceStructureToFolder(deviceStructure, {}),
    )[0];
  }

  return { ...state };
};
