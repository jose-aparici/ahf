export type Severity = 'success' | 'info' | 'warning' | 'error';

export interface Notification {
  text: string;
  severity: Severity;
}
