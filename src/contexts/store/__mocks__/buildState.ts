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
  oscilloscope: {
    settings: {
      channels: [],
      params: [],
      trigger: undefined,
      triggerLevel: 0,
      mode: 0,
      sampleRate: 0,
      delay: 0,
    },
  },
  settingsAdmin: { currentFile: undefined },
};

export const buildState = (overrides = {}): State => ({
  ...DEFAULT_STATE,
  ...overrides,
});
