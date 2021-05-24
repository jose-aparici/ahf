import { EventLogFileName } from 'domain/event/events.type';

export enum AppCommand {
  CHANGE_EVENT_LOG_FILE_NAME = 'ChangeEventLogFileName',
}

export type AppPayload = EventLogFileName;
