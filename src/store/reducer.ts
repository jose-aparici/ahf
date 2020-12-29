import {
  DeviceInfo,
  DeviceParamUpdate,
  DeviceStructure,
} from 'domain/ahf/ahf.types';

import { Action } from './actions';
import { State } from './initialState';
import { deviceInfoReducer } from './reducer_device_info';
import { deviceParamUpdateReducer } from './reducer_device_param_update';
import { deviceStructureReducer } from './reducer_device_structure';
import { DEVICE_INFO, DEVICE_PARAM_UPDATE, DEVICE_STRUCTURE } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case DEVICE_INFO:
      return deviceInfoReducer(state, payload as DeviceInfo);

    case DEVICE_STRUCTURE:
      return deviceStructureReducer(state, payload as DeviceStructure);

    case DEVICE_PARAM_UPDATE:
      return deviceParamUpdateReducer(state, payload as DeviceParamUpdate);

    default:
      return state;
  }
};
