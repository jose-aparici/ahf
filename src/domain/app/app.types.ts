import { EventLogFileName } from 'domain/event/events.type';

export enum AppCommand {
  CHANGE_EVENT_LOG_FILE_NAME = 'ChangeEventLogFileName',
  CLEAR_EVENT_LOGS = 'ClearEventLogs',
}

export type AppPayload = EventLogFileName;
