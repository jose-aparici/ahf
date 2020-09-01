export enum Command {
  VERSION = 'WSVer',
  SCAN = 'Scan',
  DEVICE_INFO = 'DevInfo',
  DEVICE_STRUCTURE = 'FolderStruct',
  FOLDER_SELECT = 'FolderSelect',
  PARAM_UPDATE = 'WriteParam',
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
  Unit: string;
  Value: number | string | undefined;
}

export interface DeviceParams {
  ParData: Array<Param>;
}

export interface DeviceStructure {
  DeviceID: number;
  FolderNames: Array<string>;
  FolderData: Record<string, DeviceParams>;
}

export interface DeviceUpdate {
  Device: string;
  Folder?: string;
}

export interface DeviceParamUpdate {
  DeviceID: number;
  FolderName: string;
  Marker: number;
  ParamID: number;
  ParamPos: number;
  Value: number | string;
}

export interface AhfMessage {
  Cmd: string;
  Data?: DeviceInfo | DeviceStructure | DeviceUpdate | DeviceParamUpdate;
}
