import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfEvent, AhfEventLogFiles } from 'domain/ahf-event/ahf-event.types';
import { AhfFolderSelect } from 'domain/ahf-folder/ahf-folder.types';
import { AhfNotification } from 'domain/ahf-notification/ahf-notification.types';
import {
  AhfOscilloscopeSettings,
  AhfOscilloscopeStatus,
} from 'domain/ahf-oscilloscope-settings/ahf-oscilloscope-settings';
import { AhfOscilloscopeData } from 'domain/ahf-oscilloscope/ahf-oscilloscope';
import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import {
  AhfSettingsAdminFile,
  AhfSettingsAdminFileList,
} from 'domain/ahf-settings-admin/ahf-settings-admin.types';

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
  READ_PARAMETER_SET_FILE = 'ReadParameterSetFile',
  WRITE_PARAMETER_SET_FILE = 'WriteParameterSetFile',
  WRITE_OSCILLOSCOPE_SETTINGS = 'WriteOsciSetup',
  WRITE_OSCILLOSCOPE_DATA = 'WriteOsciData',
  WRITE_OSCILLOSCOPE_STATUS = 'WriteOsciStatus',
  READ_OSCILLOSCOPE_SETTINGS = 'ReadOsciSetup',
  READ_OSCILLOSCOPE_STATUS = 'ReadOsciStatus',
}

export type AhfPayload =
  | AhfDeviceInfo
  | AhfDeviceStructure
  | AhfParamRead
  | AhfEvent
  | AhfEventLogFiles
  | AhfNotification
  | AhfSettingsAdminFile
  | AhfSettingsAdminFileList
  | AhfOscilloscopeSettings
  | AhfOscilloscopeData
  | AhfOscilloscopeStatus;

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
