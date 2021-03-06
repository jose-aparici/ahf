import { SettingsAdminFile } from 'domain/settings-admin/settings-admin.types';

import { AhfSettingsAdminFile } from './ahf-settings-admin.types';

export const transformCurrentFileToAhfCurrentFile = (
  fileName: string,
  currentFile: SettingsAdminFile,
): AhfSettingsAdminFile => {
  const ahfCurrentFile: AhfSettingsAdminFile = {
    FileName: fileName,
    ParameterSet: currentFile.parameterSet.map((parameter) => ({
      EnumVal: parameter.enumVal,
      ParamFolder: parameter.folder,
      ParamID: parameter.id,
      ParamName: parameter.name,
      Value: parameter.value,
    })),
  };

  return ahfCurrentFile;
};
