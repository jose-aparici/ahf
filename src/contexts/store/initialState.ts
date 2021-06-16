import { Device } from 'domain/device/device.types';
import { EventLogs } from 'domain/event/events.type';
import { Notification } from 'domain/notification/notification.types';
import { Oscilloscope } from 'domain/oscilloscope/oscilloscope.types';
import { Settings } from 'domain/settings/setting.types';

export interface State {
  devices: Record<number, Device>;
  eventLogs: EventLogs;
  initialDevice: number;
  notification: Notification | undefined;
  settings: Settings | undefined;
  oscilloscope: Oscilloscope;
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
      channels: [
        { id: 1, label: ['channel1', 'channel1', 'channel1', 'channel1'] },
        { id: 2, label: ['channel2', 'channel2', 'channel2', 'channel2'] },
        { id: 3, label: ['channel3', 'channel3', 'channel3', 'channel3'] },
        { id: 4, label: ['channel4', 'channel4', 'channel4', 'channel4'] },
        { id: 5, label: ['channel5', 'channel5', 'channel5', 'channel5'] },
        { id: 6, label: ['channel6', 'channel6', 'channel6', 'channel6'] },
      ],
    },
  },
};
