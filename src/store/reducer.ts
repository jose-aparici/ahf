import { DeviceInfo, DeviceStructure } from 'domain/device/device.types';
import { ParamRead } from 'domain/param/param.types';

import { Action } from './actions';
import { State } from './initialState';
import { deviceInfoReducer } from './reducer_device_info';
import { deviceStructureReducer } from './reducer_device_structure';
import { paramReadReducer } from './reducer_param_read';
import { DEVICE_INFO, DEVICE_STRUCTURE, PARAM_READ } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case DEVICE_INFO:
      return deviceInfoReducer(state, payload as DeviceInfo);

    case DEVICE_STRUCTURE:
      return deviceStructureReducer(state, payload as DeviceStructure);

    case PARAM_READ:
      return paramReadReducer(state, payload as ParamRead);

    default:
      return state;
  }
};
