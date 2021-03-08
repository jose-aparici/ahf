import {
  DeviceInfoAhf,
  DeviceStructureAhf,
} from 'domain/ahf-device/ahf-device.types';

import { Action } from './actions';
import { State } from './initialState';
import { deviceInfoReducer } from './reducer_device_info';
import { deviceStructureReducer } from './reducer_device_structure';
import { DEVICE_INFO, DEVICE_STRUCTURE } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case DEVICE_INFO:
      return deviceInfoReducer(state, payload as DeviceInfoAhf);

    case DEVICE_STRUCTURE:
      return deviceStructureReducer(state, payload as DeviceStructureAhf);

    default:
      return state;
  }
};
