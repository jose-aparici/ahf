import { AhfEvent } from 'domain/ahf-event/ahf-event.types';
import { Log, LogType } from 'domain/events/events.type';

import { State } from './events.container';

export const writeEventsReducer = (state: State, eventLog: AhfEvent): State => {
  const logs: Log[] = eventLog.EventLog.Entries.map((EventLog) => {
    return {
      date: EventLog.Date,
      time: EventLog.Time,
      message: EventLog.Message,
      operatingHours: EventLog['Operating Hours'],
      type: (EventLog.Type as unknown) as LogType,
    };
  });

  state.event = {
    fileName: eventLog.FileName,
    logs,
  };

  return {
    ...state,
  };
};
