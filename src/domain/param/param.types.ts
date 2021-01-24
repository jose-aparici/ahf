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

export interface ParamRead {
  DeviceID: number;
  FolderName: string;
  Marker: number;
  ParamID: number;
  ParamPos: number;
  Value: number | string;
}