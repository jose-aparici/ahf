import { DeviceInfo, DeviceStructure } from 'domain/ahf/ahf.types';

import { DEVICE_INFO, DEVICE_STRUCTURE } from './types';

export interface DeviceInfoAction {
  type: DEVICE_INFO;
  payload: DeviceInfo;
}

export interface DeviceStructureAction {
  type: DEVICE_STRUCTURE;
  payload: DeviceStructure;
}

export type Action = DeviceInfoAction | DeviceStructureAction;
