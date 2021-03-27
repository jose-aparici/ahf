export type ParamValue = number | string | undefined;

export interface Param {
  accessType: string;
  description: Array<string>;
  name: Array<string>;
  paramEnumNumb: number;
  paramEnumText: Array<string>;
  paramId: number;
  paramType: string;
  unit: string;
  value: ParamValue;
}

export interface ParamRead {
  deviceId: number;
  folderName: string;
  marker: number;
  paramId: number;
  paramPos: number;
  value: number | string;
}
