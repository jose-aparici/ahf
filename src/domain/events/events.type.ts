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

export type Event = {
  fileName: string;
  logs: Log[];
};
