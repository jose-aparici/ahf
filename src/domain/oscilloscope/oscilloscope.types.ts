import { Param } from 'domain/param/param.types';

export type Channel = Param;

export interface Settings {
  channels: Channel[];
  params: Param[];
  trigger: Param | undefined;
  triggerLevel: number;
  mode: number;
  sampleRate: number;
}

export interface Oscilloscope {
  settings: Settings;
}
