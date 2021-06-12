export interface SettingsAdminFile {
  fileName: string;
  parameterSet: SettingsAdminParameter[];
}

export type SettingsAdminParameter = {
  folder: string;
  id: number;
  name: string;
  value: number;
  enumVal: string;
};

export type SettingsAdminFileList = string[];
