import { DeviceInfo, DeviceStructure } from 'domain/device/device.types';
import { FolderSelect } from 'domain/folder/folder.types';
import { ParamRead } from 'domain/param/param.types';

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
  Data?: DeviceInfo | DeviceStructure | FolderSelect | ParamRead;
}
