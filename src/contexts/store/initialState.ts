import { Device } from 'domain/device/device.types';
import { EventLogs } from 'domain/event/events.type';
import { Notification } from 'domain/notification/notification.types';
import { SettingsAdminFile } from 'domain/settings-admin/settings-admin.types';
import { Settings } from 'domain/settings/setting.types';

export interface State {
  devices: Record<number, Device>;
  eventLogs: EventLogs;
  initialDevice: number;
  notification: Notification | undefined;
  settings: Settings | undefined;
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
  settingsAdmin: { currentFile: undefined },
};
