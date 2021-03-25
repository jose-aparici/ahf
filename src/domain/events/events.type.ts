export type EventType = 'warning' | 'error';

export type EventRow = {
  type: EventType;
  timestamp: string;
  message: string;
};
