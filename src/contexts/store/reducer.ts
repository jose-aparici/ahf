import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfEvent } from 'domain/ahf-event/ahf-event.types';
import { AhfNotification } from 'domain/ahf-notification/ahf-notification.types';
import { AhfCommand } from 'domain/ahf/ahf.types';
import { Action, AppCommand } from 'domain/app/app.types';
import { EventLogFileName } from 'domain/event/events.type';
import { Notification, Severity } from 'domain/notification/notification.types';

import { State } from './initialState';
import { deviceInfoReducer } from './reducer_device_info';
import { deviceStructureReducer } from './reducer_device_structure';
import { writeEventsReducer } from './reducer_write_events';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case AhfCommand.DEVICE_INFO:
      return deviceInfoReducer(state, payload as AhfDeviceInfo);

    case AhfCommand.DEVICE_STRUCTURE:
      return deviceStructureReducer(state, payload as AhfDeviceStructure);

    case AhfCommand.WRITE_EVENTS:
      return writeEventsReducer(state, payload as AhfEvent);

    case AppCommand.CHANGE_EVENT_LOG_FILE_NAME: {
      state.eventLogs.fileName = payload as EventLogFileName;
      return { ...state };
    }

    case AppCommand.CLEAR_EVENT_LOGS: {
      state.eventLogs.logs = [];
      return { ...state };
    }

    case AhfCommand.DISPLAY_MESSAGE: {
      const notification = payload as AhfNotification;
      state.notification = {
        text: notification.Text,
        severity: notification.Severity as Severity,
      } as Notification;

      return { ...state };
    }

    case AhfCommand.SETTINGS_STRUCTURE: {
      return deviceStructureReducer(state, payload as AhfDeviceStructure);
    }

    case AhfCommand.WRITE_PARAMETER_SET_FILE: {
      return state;
    }

    default:
      return state;
  }
};
