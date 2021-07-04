import { State } from 'contexts/store/initialState';

import { DeviceInfo, DevicePaths } from 'domain/device/device.types';
import { Folder } from 'domain/folder/folder.types';
import { OscilloscopeMode } from 'domain/oscilloscope-settings/oscilloscope-settings.types';

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
      trigger: { id: 0 },
      triggerLevel: 0,
      triggerMode: 0,
      samplePeriod: 0,
      delay: 0,
      mode: OscilloscopeMode.SINGLE_SHOT_FREQUENCY,
    },
  },
  settingsAdmin: { currentFile: undefined },
};

export const buildState = (overrides = {}): State => ({
  ...DEFAULT_STATE,
  ...overrides,
});
