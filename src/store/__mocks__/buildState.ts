import { State } from 'store/initialState';

import { DeviceInfo, Folder } from 'domain/device/device.types';

const DEFAULT_STATE: State = {
  devices: {
    1: {
      info: {} as DeviceInfo,
      structure: {} as Folder,
    },
  },
};

export const buildState = (overrides = {}): State => ({
  ...DEFAULT_STATE,
  ...overrides,
});
