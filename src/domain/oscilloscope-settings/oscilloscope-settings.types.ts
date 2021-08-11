import { Param } from 'domain/param/param.types';

export interface Channel {
  id: number;
  name?: string;
  selected?: boolean;
}

export interface OscilloscopeSettings {
  channels: Channel[];
  params: Param[];
  trigger: Channel;
  triggerLevel: number;
  triggerMode: number;
  samplePeriod: number;
  delay: number;
  mode: OscilloscopeMode;
  type: OscilloscopeType;
  deviceId?: number;
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
  iddle = 'iddle',
  start = 'start',
  waitingForTrigger = 'waitingForTrigger',
  triggerFound = 'triggerFound',
  recording = 'recording',
  dataReady = 'dataReady',
  settingsReady = 'settingsReady',
}
