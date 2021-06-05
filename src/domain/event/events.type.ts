export enum LogType {
  ERROR = 'error',
  WARNING = 'warning',
  STATUS = 'status',
  INFO = 'info',
}

export type Log = {
  date: string;
  time: string;
  message: string;
  operatingHours: string;
  type: LogType;
};

export type EventLogs = {
  fileName: EventLogFileName;
  logs: Log[];
};

export type EventLogFiles = string[];

export type EventLogFileName = string;

export enum EventLogsFileNamesCommand {
  CLEAR = '',
}

export type EventLogsFileNamesPayload = EventLogFiles;
