import { AhfEvent } from 'domain/ahf-event/ahf-event.types';
import { Log, LogType } from 'domain/event/events.type';

import { State } from './initialState';

export const writeEventsReducer = (state: State, eventLog: AhfEvent): State => {
  const logs: Log[] = eventLog.EventLog.Entries.map((EventLog) => {
    return {
      date: EventLog.Date,
      time: EventLog.Time,
      message: EventLog.Message,
      operatingHours: EventLog['Operating Hours'],
      type: EventLog.Type.toString().toLowerCase() as LogType,
    };
  });

  state.eventLogs = {
    fileName: eventLog.FileName,
    logs,
  };

  return {
    ...state,
  };
};
