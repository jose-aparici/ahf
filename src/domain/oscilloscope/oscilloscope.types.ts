import { Param } from 'domain/param/param.types';

export type Channel = Param;

export interface Settings {
  channels: Channel[];
  params: Param[];
}

export interface Oscilloscope {
  settings: Settings;
}
