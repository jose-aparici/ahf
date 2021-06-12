export interface AhfSettingsAdminFile {
  FileName: string;
  ParameterSet: AhfSettingsAdminParameter[];
}

export type AhfSettingsAdminParameter = {
  ParamID: number;
  ParamName: string;
  Value: number;
};

export type AhfSettingsAdminFileList = string[];
