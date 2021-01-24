import { DeviceStructure } from 'domain/device/device.types';

import { Param } from './param.types';

export const findParamById = (
  deviceStructure: DeviceStructure,
  folderId: string,
  paramId: string,
): Param => {
  const folderName = deviceStructure.FolderNames[+folderId];
  const param = deviceStructure.FolderData[folderName].ParData.find(
    (param: Param) => param.ParamID === +paramId,
  );

  if (param) {
    return param;
  } else {
    throw new Error();
  }
};
