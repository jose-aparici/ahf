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

export interface Param {
  AccessType: string;
  Description: Array<string>;
  Name: Array<string>;
  ParamEnumNumb: number;
  ParamEnumText: Array<string>;
  ParamID: number;
  ParamType: string;
}

export interface DeviceParams {
  ParData: Array<Param>;
}

export interface DeviceStructure {
  DeviceID: number;
  FolderNames: Array<string>;
  FolderData: Record<string, DeviceParams>;
}

export interface FolderSelect {
  Device: number;
  Folder: number;
}

export interface AhfMessage {
  Cmd: string;
  Data?: DeviceInfo | DeviceStructure;
}
