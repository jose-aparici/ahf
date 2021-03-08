import { State } from 'store/initialState';

import { DeviceInfo, DeviceNode } from 'domain/device/device.types';

const DEFAULT_STATE: State = {
  devices: {
    1: {
      info: {} as DeviceInfo,
      structure: {} as DeviceNode,
    },
  },
};

export const buildState = (overrides = {}): State => ({
  ...DEFAULT_STATE,
  ...overrides,
});
