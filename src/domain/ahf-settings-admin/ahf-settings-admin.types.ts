export interface AhfSettingsAdminFile {
  FileName: string;
  ParameterSet: AhfSettingsAdminParameter[];
}

export type AhfSettingsAdminParameter = {
  ParamFolder: string;
  ParamID: number;
  ParamName: string;
  Value: number;
  EnumVal: string;
};

export type AhfSettingsAdminFileList = string[];
