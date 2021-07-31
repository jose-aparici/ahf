import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import {
  EventLogFileName,
  EventLogsFileNamesCommand,
  EventLogsFileNamesPayload,
} from 'domain/event/events.type';
import { Oscilloscope } from 'domain/oscilloscope/oscilloscope.types';
import { ResourceCommand } from 'domain/resource/resource.type';

import { OscilloscopeSettings } from '../oscilloscope-settings/oscilloscope-settings.types';
import { ResourcePayload } from '../resource/resource.type';

export enum AppCommand {
  CHANGE_EVENT_LOG_FILE_NAME = 'ChangeEventLogFileName',
  CLEAR_EVENT_LOGS = 'ClearEventLogs',
  SETTINGS_ADMIN_CLEAR_FILE_LIST = 'SettingsAdminClearFileList',
  UPDATE_OSCILLOSCOPE_SETTINGS = 'UpdateOscilloscopeSettings',
}

export type AppPayload = EventLogFileName | Oscilloscope | OscilloscopeSettings;

export type Action = {
  type: AhfCommand | AppCommand | ResourceCommand | EventLogsFileNamesCommand;

  payload:
    | AhfPayload
    | AppPayload
    | ResourcePayload
    | EventLogsFileNamesPayload;
};
