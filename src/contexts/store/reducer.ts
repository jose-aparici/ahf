import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfEvent } from 'domain/ahf-event/ahf-event.types';

import { Action } from './actions';
import { State } from './initialState';
import { deviceInfoReducer } from './reducer_device_info';
import { deviceStructureReducer } from './reducer_device_structure';
import { writeEventsReducer } from './reducer_write_events';
import { DEVICE_INFO, DEVICE_STRUCTURE, WRITE_EVENTS } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case DEVICE_INFO:
      return deviceInfoReducer(state, payload as AhfDeviceInfo);

    case DEVICE_STRUCTURE:
      return deviceStructureReducer(state, payload as AhfDeviceStructure);

    case WRITE_EVENTS:
      return writeEventsReducer(state, payload as AhfEvent);

    default:
      return state;
  }
};
