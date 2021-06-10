import { State } from 'contexts/store/initialState';

import { DeviceInfo, DevicePaths } from 'domain/device/device.types';
import { Folder } from 'domain/folder/folder.types';

const DEFAULT_STATE: State = {
  devices: {
    1: {
      info: {} as DeviceInfo,
      structure: {} as Folder,
      paths: {} as DevicePaths,
    },
  },
  initialDevice: -1,
  eventLogs: {
    fileName: '',
    logs: [],
  },
  notification: undefined,
  settings: undefined,
};

export const buildState = (overrides = {}): State => ({
  ...DEFAULT_STATE,
  ...overrides,
});
