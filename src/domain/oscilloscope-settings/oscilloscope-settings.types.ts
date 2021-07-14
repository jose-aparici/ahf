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

export enum OscilloscopeType {
  TIME = 0,
  FREQUENCY = 1,
}

export enum OscilloscopeMode {
  SINGLE = 0,
  CONTINUOUS = 1,
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
  settingsReady,
}

/*
  iddle, // display play button // app send to stop osci
  start, // display stop button  // app send to start osci
  waitingForTrigger, //display stop button 
  triggerFound ///display stop button
  recording //display stop button,
  dataReady // display play button,
*/
