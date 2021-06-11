import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfEvent, AhfEventLogFiles } from 'domain/ahf-event/ahf-event.types';
import { AhfFolderSelect } from 'domain/ahf-folder/ahf-folder.types';
import { AhfNotification } from 'domain/ahf-notification/ahf-notification.types';
import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';

export enum AhfCommand {
  VERSION = 'WSVer',
  SCAN = 'Scan',
  READ_INI_FILE = 'ReadIniFile',
  DEVICE_INFO = 'DevInfo',
  DEVICE_STRUCTURE = 'FolderStruct',
  FOLDER_SELECT = 'FolderSelect',
  PARAM_DETAIL = 'WriteParam',
  READ_EVENTS = 'ReadEventLog',
  WRITE_EVENTS = 'WriteEventLog',
  EVENT_LOG_FILES = 'EventLogFiles',
  READ_EVENT_LOG_FROM_FILE = 'ReadEventLogFromFile',
  DISPLAY_MESSAGE = 'DisplayMessage',
  SETTINGS_STRUCTURE = 'SettingsStructure',
  READ_PARAMETER_SET_LIST = 'ReadParameterSetList',
  WRITE_PARAMETER_SET_LIST = 'WriteParameterSetList',
}

export type AhfPayload =
  | AhfDeviceInfo
  | AhfDeviceStructure
  | AhfParamRead
  | AhfEvent
  | AhfEventLogFiles
  | AhfNotification;

export interface AhfMessage {
  Cmd: AhfCommand;
  Len?: string;
  Data?:
    | AhfDeviceInfo
    | AhfDeviceStructure
    | AhfFolderSelect
    | AhfParamRead
    | AhfEvent
    | AhfEventLogFiles
    | { Len: string }
    | { FileName: string }
    | string;
}
