import {
  DeviceInfo,
  DeviceParamUpdate,
  DeviceStructure,
} from 'domain/ahf/ahf.types';

import { DEVICE_INFO, DEVICE_PARAM_UPDATE, DEVICE_STRUCTURE } from './types';

export interface DeviceInfoAction {
  type: DEVICE_INFO;
  payload: DeviceInfo;
}

export interface DeviceStructureAction {
  type: DEVICE_STRUCTURE;
  payload: DeviceStructure;
}

export interface DeviceUpdateParamAction {
  type: DEVICE_PARAM_UPDATE;
  payload: DeviceParamUpdate;
}

export type Action =
  | DeviceInfoAction
  | DeviceStructureAction
  | DeviceUpdateParamAction;
