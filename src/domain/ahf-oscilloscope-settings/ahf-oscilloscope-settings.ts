export interface AhfOscilloscopeSettings {
  Ch1: number;
  Ch2: number;
  Ch3: number;
  Ch4: number;
  Ch5: number;
  Ch6: number;
  TriggerSignal: number;
  TriggerLevel: number;
  TriggerMode: number;
  Delay: number;
  SamplingPeriod: number;
  Mode: AhfOscilloscopeMode;
}

export enum AhfOscilloscopeMode {
  SINGLE = 'Single',
  CONTINUOUS = 'Continuous',
}

export interface AhfOscilloscopeStatus {
  Status: AhfStatus;
}

export enum AhfStatus {
  Iddle = 'Iddle',
  Start = 'Start',
  WaitingForTrigger = 'WaitingForTrigger',
  TriggerFound = 'TriggerFound',
  Recording = 'Recording',
  DataReady = 'DataReady',
  SettingsReady = 'SettingsReady',
}
