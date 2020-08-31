export enum Command {
  VERSION = 'WSVer',
  SCAN = 'Scan',
  DEV_INFO = 'DevInfo',
  FOLDER_STRUCT = 'FolderStruct',
  FOLDER_SELECT = 'FolderSelect',
}

export interface DevInfo {
  Company: string;
  FW: string;
  ID: number;
  Status: number;
  Type: string;
}

export interface FolderSelect {
  Device: number;
  Folder: number;
}

export interface AhfMessage {
  Cmd: string;
  Data?: DevInfo | FolderSelect;
}
