export enum AhfLogType {
  ERROR = 'Error',
  WARNING = 'Warning',
  STATUS = 'Status',
  INFO = 'Info',
}

export interface AhfLog {
  Date: string;
  Time: string;
  Message: string;
  'Operating Hours': string;
  Type: AhfLogType;
}
export interface AhfEvent {
  EventLog: {
    Entries: AhfLog[];
  };
  FileName: string;
}

export type AhfEventLogFiles = string[];
