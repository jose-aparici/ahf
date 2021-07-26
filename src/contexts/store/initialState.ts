import { Device } from 'domain/device/device.types';
import { EventLogs } from 'domain/event/events.type';
import { Notification } from 'domain/notification/notification.types';
import {
  OscilloscopeMode,
  OscilloscopeType,
  Status,
} from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { Oscilloscope } from 'domain/oscilloscope/oscilloscope.types';
import { SettingsAdminFile } from 'domain/settings-admin/settings-admin.types';
import { Settings } from 'domain/settings/setting.types';

export interface State {
  devices: Record<number, Device>;
  eventLogs: EventLogs;
  initialDevice: number;
  notification: Notification | undefined;
  settings: Settings | undefined;
  oscilloscope: Oscilloscope;
  settingsAdmin: {
    currentFile: SettingsAdminFile | undefined;
  };
}

export const initialState: State = {
  devices: {},
  eventLogs: {
    fileName: '',
    logs: [],
  },
  initialDevice: -1,
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
      mode: OscilloscopeMode.SINGLE,
      type: OscilloscopeType.TIME,
    },
    status: Status.iddle,
  },
  settingsAdmin: { currentFile: undefined },
};
