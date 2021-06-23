import { Param } from 'domain/param/param.types';

export type Channel = Param;

export interface Settings {
  channels: Channel[];
  params: Param[];
  trigger: Param | undefined;
}

export interface Oscilloscope {
  settings: Settings;
}
