export type ParamValue = number | string | undefined;

export enum AccessType {
  READ_ONLY = 'READ_ONLY',
  READ_WRITE = 'READ_WRITE',
}

export enum ParamType {
  SIGNED_INTEGER = 'SignedInteger',
  UNSIGNED_INTEGER = 'UnsignedInteger',
  FLOATING_POINT = 'FloatingPoint',
  STRING = 'String',
  DATE = 'Date',
  ENUM = 'Enum',
  IP = 'Ip',
  MAC = 'Mac',
}
export interface Param {
  accessType: AccessType;
  description: Array<string>;
  name: Array<string>;
  paramEnumNumb: number;
  paramEnumText: Record<number, Array<string>>;
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

export interface ParamError {
  text: string;
}

export interface ParamValidation {
  regex?: string;
}
