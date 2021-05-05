import { State } from 'contexts/store/initialState';

import { DeviceInfo } from 'domain/device/device.types';
import { Folder } from 'domain/folder/folder.types';

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