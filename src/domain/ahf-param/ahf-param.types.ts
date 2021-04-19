export type AhfParamValue = number | string | undefined;

export interface AhfParams {
  ParData: Array<AhfParam>;
}

export interface AhfParam {
  AccessType: string;
  Description: Array<string>;
  Name: Array<string>;
  ParamEnumNumb: number;
  ParamEnumText: Array<string>;
  ParamID: number;
  ParamType: AhfParamType;
  Unit: string;
  Value: AhfParamValue;
}

export interface AhfParamRead {
  DeviceID: number;
  FolderName: string;
  Marker: number;
  ParamID: number;
  ParamPos: number;
  Value: number | string;
}

export type AhfParamType =
  | 'SignedInteger_8'
  | 'SignedInteger_16'
  | 'SignedInteger_32'
  | 'UnsignedInteger_8'
  | 'UnsignedInteger_16'
  | 'UnsignedInteger_32'
  | 'SinglePrecisionFloatingPoint'
  | 'VisibleString'
  | 'Date';
