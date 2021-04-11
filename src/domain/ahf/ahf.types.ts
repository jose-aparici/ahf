import { Action, Payload } from 'store/actions';

import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfFolderSelect } from 'domain/ahf-folder/ahf-folder.types';
import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';

export enum AhfCommand {
  VERSION = 'WSVer',
  SCAN = 'Scan',
  DEVICE_INFO = 'DevInfo',
  DEVICE_STRUCTURE = 'FolderStruct',
  FOLDER_SELECT = 'FolderSelect',
  PARAM_DETAIL = 'WriteParam',
}
export interface AhfMessage {
  Cmd: AhfCommand;
  Data?: AhfDeviceInfo | AhfDeviceStructure | AhfFolderSelect | AhfParamRead;
}

//TODO check Action and payload types naming
export type AhfAction = Action;

export type AhfPayload = Payload;
