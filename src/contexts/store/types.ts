import { AhfCommand } from 'domain/ahf/ahf.types';

import { AppCommand } from '../../domain/app/app.types';

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

export const EVENT_LOG_FILES = AhfCommand.EVENT_LOG_FILES;
export type EVENT_LOG_FILES = typeof EVENT_LOG_FILES;

export const CHANGE_EVENT_LOG_FILE_NAME = AppCommand.CHANGE_EVENT_LOG_FILE_NAME;
export type CHANGE_EVENT_LOG_FILE_NAME = typeof CHANGE_EVENT_LOG_FILE_NAME;

export const DISPLAY_MESSAGE = AhfCommand.DISPLAY_MESSAGE;
export type DISPLAY_MESSAGE = typeof DISPLAY_MESSAGE;
