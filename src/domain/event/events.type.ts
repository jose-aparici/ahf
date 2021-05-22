export enum LogType {
  ERROR = 'Error',
  WARNING = 'Warning',
  STATUS = 'Status',
  INFO = 'Info',
}

export type Log = {
  date: string;
  time: string;
  message: string;
  operatingHours: string;
  type: LogType;
};

export type EventLogs = {
  fileName: string;
  logs: Log[];
};

export type EventLogFiles = string[];

export const ALL_EVENTS_SIZE = '512';
export const LATEST_EVENTS_SIZE = '127';
