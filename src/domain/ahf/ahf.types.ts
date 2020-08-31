export enum Command {
  VERSION = 'WSVer',
  SCAN = 'Scan',
  DEVICE_INFO = 'DevInfo',
  DEVICE_STRUCTURE = 'FolderStruct',
  FOLDER_SELECT = 'FolderSelect',
}

export interface DeviceInfo {
  Company: string;
  FW: string;
  ID: number;
  Status: number;
  Type: string;
}

export interface DeviceStructure {
  DeviceID: number;
}

export interface FolderSelect {
  Device: number;
  Folder: number;
}

export interface AhfMessage {
  Cmd: string;
  Data?: DeviceInfo | DeviceStructure;
}
