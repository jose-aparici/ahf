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
  SINGLE_SHOT_FREQUENCY = 'Single Shot Frequency',
  CONTINUOUS_TIME = 'Continuous Time',
}

export interface AhfOscilloscopeStatus {
  Status: AhfStatus;
}

export enum AhfStatus {
  Iddle = 'iddle',
  Start = 'start',
  WaitingForTrigger = 'waitingForTrigger',
  TriggerFound = 'triggerFound',
  Recording = 'recording',
  DataReady = 'dataReady',
}
