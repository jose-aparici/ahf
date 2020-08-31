import { DevInfo } from 'domain/ahf/ahf.types';

import { DEV_INFO } from './types';

export interface DevInfoAction {
  type: DEV_INFO;
  payload: DevInfo;
}

export type Action = DevInfoAction;
