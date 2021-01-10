import { State } from 'store/initialState';

import { DeviceInfo, DeviceStructure } from 'domain/device/device.types';

const DEFAULT_STATE: State = {
  devices: {
    1: {
      info: {} as DeviceInfo,
      structure: {} as DeviceStructure,
    },
  },
};

export const buildState = (overrides = {}): State => ({
  ...DEFAULT_STATE,
  ...overrides,
});
