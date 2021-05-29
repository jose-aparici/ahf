import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfEvent } from 'domain/ahf-event/ahf-event.types';
import { AhfNotification } from 'domain/ahf-notification/ahf-notification.types';
import { EventLogFileName } from 'domain/event/events.type';
import { Notification, Severity } from 'domain/notification/notification.types';

import { Action } from './actions';
import { State } from './initialState';
import { deviceInfoReducer } from './reducer_device_info';
import { deviceStructureReducer } from './reducer_device_structure';
import { writeEventsReducer } from './reducer_write_events';
import {
  CHANGE_EVENT_LOG_FILE_NAME,
  DEVICE_INFO,
  DEVICE_STRUCTURE,
  DISPLAY_MESSAGE,
  WRITE_EVENTS,
} from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case DEVICE_INFO:
      return deviceInfoReducer(state, payload as AhfDeviceInfo);

    case DEVICE_STRUCTURE:
      return deviceStructureReducer(state, payload as AhfDeviceStructure);

    case WRITE_EVENTS:
      return writeEventsReducer(state, payload as AhfEvent);

    case CHANGE_EVENT_LOG_FILE_NAME: {
      state.eventLogs.fileName = payload as EventLogFileName;
      return { ...state };
    }

    case DISPLAY_MESSAGE: {
      const notification = payload as AhfNotification;
      state.notification = {
        text: notification.Text,
        severity: notification.Severity as Severity,
      } as Notification;

      return { ...state };
    }

    default:
      return state;
  }
};
