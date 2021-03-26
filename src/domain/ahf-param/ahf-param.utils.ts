import { AhfDeviceStructure } from 'domain/ahf-device/ahf-device.types';
import { Param } from 'domain/param/param.types';

import { AhfParam } from './ahf-param.types';

export const findParamById = (
  deviceStructure: AhfDeviceStructure,
  folderId: string,
  paramId: string,
): AhfParam => {
  throw new Error('param not found');
  /* const folderName = deviceStructure.FolderNames[+folderId];
  const param = deviceStructure.FolderData[folderName].Params.ParData.find(
    (param: Param) => param.ParamID === +paramId,
  );

  if (param) {
    return param;
  } else {
    throw new Error('param not found'); 
  }*/
};

export const findParamIndexById = (
  params: Param[],
  paramId: string,
): number => {
  const paramIndex = params.findIndex((param) => param.paramId === +paramId);
  if (paramIndex >= 0) {
    return paramIndex;
  } else {
    throw new Error('param not found');
  }
};

//TODO to be removed
export const initParam = {
  AccessType: 'READ_ONLY',
  Description: [
    'Momentanwert der verketteten Netzspannung U12 ',
    'Instantaneous value of line to line voltage U12',
    'Instantaneous value of line to line voltage U12',
    'Valeur instantanée tension secteur U12',
  ],
  Name: [
    'Netzspannung U12',
    'Line voltage U12',
    '相瞬时电压 U12',
    'Tension sect U12',
  ],
  ParamEnumNumb: 4,
  ParamEnumText: ['OK', 'Error', 'Too high', 'Too low'],
  ParamID: 113,
  ParamType: 'string',
  Unit: 'V',
  Value: 1103.42,
};
