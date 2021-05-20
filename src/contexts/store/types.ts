import { AhfCommand } from 'domain/ahf/ahf.types';

export const DEVICE_INFO = AhfCommand.DEVICE_INFO;
export type DEVICE_INFO = typeof DEVICE_INFO;

export const DEVICE_STRUCTURE = AhfCommand.DEVICE_STRUCTURE;
export type DEVICE_STRUCTURE = typeof DEVICE_STRUCTURE;

export const PARAM_READ = AhfCommand.PARAM_DETAIL;
export type PARAM_READ = typeof PARAM_READ;

export const READ_EVENTS = AhfCommand.READ_EVENTS;
export type READ_EVENTS = typeof READ_EVENTS;

export const WRITE_EVENTS = AhfCommand.WRITE_EVENTS;
export type WRITE_EVENTS = typeof WRITE_EVENTS;
