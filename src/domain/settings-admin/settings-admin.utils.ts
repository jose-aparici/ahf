import { AhfSettingsAdminFile } from 'domain/ahf-settings-admin/ahf-settings-admin.types';

import { SettingsAdminFile } from './settings-admin.types';

export const transformAhfCurrentFileToCurrentFile = (
  ahfCurrentFile: AhfSettingsAdminFile,
): SettingsAdminFile => {
  const currentFile: SettingsAdminFile = {
    fileName: ahfCurrentFile.FileName,
    parameterSet: ahfCurrentFile.ParameterSet.map((parameter) => ({
      enumVal: parameter.EnumVal,
      folder: parameter.ParamFolder,
      id: parameter.ParamID,
      name: parameter.ParamName,
      value: parameter.Value,
    })),
  };

  return currentFile;
};
