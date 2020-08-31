import { DeviceInfo } from 'domain/ahf/ahf.types';

import { DEVICE_INFO } from './types';

export interface DevInfoAction {
  type: DEVICE_INFO;
  payload: DeviceInfo;
}

export type Action = DevInfoAction;
