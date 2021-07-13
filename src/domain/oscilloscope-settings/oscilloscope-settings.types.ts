import { Param } from 'domain/param/param.types';

export interface Channel {
  id: number;
  value?: Param;
  selected?: boolean;
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

export enum OscilloscopeMode {
  SINGLE_SHOT_TIME = 0,
  SINGLE_SHOT_FREQUENCY = 1,
  CONTINUOUS_TIME = 2,
}

export enum Mode {
  MORE_THAN = 0,
  LESS_THAN = 1,
}

export enum Status {
  iddle,
  start,
  waitingForTrigger,
  triggerFound,
  recording,
  dataReady,
}

/*
  iddle, // display play button
  start, // display stop button 
  waitingForTrigger, //display stop button 



*/
