import { Action, Payload } from 'store/actions';

import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfFolderSelect } from 'domain/ahf-folder/ahf-folder.types';
import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import {
  Action as FolderAction,
  Payload as FolderPayload,
} from 'modules/folders/folder/store/actions';

export enum AhfCommand {
  VERSION = 'WSVer',
  SCAN = 'Scan',
  DEVICE_INFO = 'DevInfo',
  DEVICE_STRUCTURE = 'FolderStruct',
  FOLDER_SELECT = 'FolderSelect',
  PARAM_READ = 'WriteParam',
}
export interface AhfMessage {
  Cmd: AhfCommand;
  Data?: AhfDeviceInfo | AhfDeviceStructure | AhfFolderSelect | AhfParamRead;
}

export type AhfAction = Action | FolderAction;

export type AhfPayload = Payload | FolderPayload;
