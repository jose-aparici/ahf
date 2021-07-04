import { Param } from 'domain/param/param.types';

export interface Channel {
  id: number;
  value?: Param;
}

export interface Settings {
  channels: Channel[];
  params: Param[];
  trigger: Channel;
  triggerLevel: number;
  triggerMode: number;
  samplePeriod: number;
  delay: number;
  mode: OscilloscopeMode;
}

export interface Oscilloscope {
  settings: Settings;
}

export enum OscilloscopeMode {
  SINGLE_SHOT_FREQUENCY = 'Single Shot Frequency',
  CONTINUOUS_TIME = 'Continuous Time',
}
