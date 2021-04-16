export type ParamValue = number | string | undefined;

export enum AccessType {
  READ_ONLY = 'READ_ONLY',
  READ_WRITE = 'READ_WRITE',
}

export enum ParamType {
  SINGLE_PRECISION_FLOATING_POINT = 'SinglePrecisionFloatingPoint',
  UNSIGNED_INTEGER_8 = 'UnsignedInteger_8',
  UNSIGNED_INTEGER_16 = 'UnsignedInteger_16',
  UNSIGNED_INTEGER_32 = 'UnsignedInteger_32',
  VISIBLE_STRING = 'VisibleString',
  ENUM = 'Enum',
}
export interface Param {
  accessType: AccessType;
  description: Array<string>;
  name: Array<string>;
  paramEnumNumb: number;
  paramEnumText: Array<string>;
  paramId: number;
  paramType: ParamType;
  unit: string;
  value: ParamValue;
  read?: ParamRead;
}

export interface ParamRead {
  deviceId: number;
  folderName: string;
  marker: number;
  paramPos: number;
}
