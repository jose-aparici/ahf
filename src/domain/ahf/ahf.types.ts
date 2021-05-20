import { Action, Payload } from 'contexts/store/actions';

import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfEvent } from 'domain/ahf-event/ahf-event.types';
import { AhfFolderSelect } from 'domain/ahf-folder/ahf-folder.types';
import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';

export enum AhfCommand {
  VERSION = 'WSVer',
  SCAN = 'Scan',
  DEVICE_INFO = 'DevInfo',
  DEVICE_STRUCTURE = 'FolderStruct',
  FOLDER_SELECT = 'FolderSelect',
  PARAM_DETAIL = 'WriteParam',
  READ_EVENTS = 'ReadEventLog',
  WRITE_EVENTS = 'WriteEventLog',
  EVENT_LOG_FILES = 'EventLogFiles',
  READ_EVENT_LOG_FROM_FILE = 'ReadEventLogFromFile',
}
export interface AhfMessage {
  Cmd: AhfCommand;
  Len?: string;
  Data?:
    | AhfDeviceInfo
    | AhfDeviceStructure
    | AhfFolderSelect
    | AhfParamRead
    | AhfEvent
    | { Len: string }
    | { FileName: string };
}

//TODO check Action and payload types naming
export type AhfAction = Action;

export type AhfPayload = Payload;
