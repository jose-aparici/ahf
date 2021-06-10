import { Device } from 'domain/device/device.types';
import { EventLogs } from 'domain/event/events.type';
import { Notification } from 'domain/notification/notification.types';
import { Settings } from 'domain/settings/setting.types';

export interface State {
  devices: Record<number, Device>;
  eventLogs: EventLogs;
  initialDevice: number;
  notification: Notification | undefined;
  settings: Settings | undefined;
}

/* export const mockedState: State = deviceStructureReducer(
  deviceInfoReducer(buildState(), deviceAhf.info),
  deviceAhf.structure,
); */

export const initialState: State = {
  devices: {},
  eventLogs: {
    fileName: '',
    logs: [],
  },
  initialDevice: -1,
  notification: undefined,
  settings: undefined,
};
