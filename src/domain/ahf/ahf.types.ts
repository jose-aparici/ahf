import {
  DeviceInfoAhf,
  DeviceStructureAhf,
} from 'domain/ahf-device/ahf-device.types';
import { FolderSelect } from 'domain/ahf-folder/ahf-folder.types';
import { ParamRead } from 'domain/param/param.types';
import {
  Action as FolderAction,
  Payload as FolderPayload,
} from 'modules/folders/folder/store/actions';

import { Action, Payload } from '../../modules/folders/folder/store/actions';

export enum Command {
  VERSION = 'WSVer',
  SCAN = 'Scan',
  DEVICE_INFO = 'DevInfo',
  DEVICE_STRUCTURE = 'FolderStruct',
  FOLDER_SELECT = 'FolderSelect',
  PARAM_READ = 'WriteParam',
}
export interface AhfMessage {
  Cmd: Command;
  Data?: DeviceInfoAhf | DeviceStructureAhf | FolderSelect | ParamRead;
}

export type AhfAction = Action | FolderAction;

export type AhfPayload = Payload | FolderPayload;
