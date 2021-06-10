import { DevicePaths } from 'domain/device/device.types';
import { Param, ParamType } from 'domain/param/param.types';

import { AhfParam, AhfParamType } from './ahf-param.types';

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

const transformAhfParamTypeToParamType = (
  ahfParamType: AhfParamType,
  ahfParamId: number,
  enumCount: number,
): ParamType => {
  if (enumCount > 0) {
    return ParamType.ENUM;
  }

  if (ahfParamId === 240 || ahfParamId === 242 || ahfParamId === 243) {
    return ParamType.IP;
  }

  if (ahfParamId === 8) {
    return ParamType.MAC;
  }

  switch (ahfParamType) {
    case 'SignedInteger_8':
    case 'SignedInteger_16':
    case 'SignedInteger_32':
      return ParamType.SIGNED_INTEGER;
    case 'UnsignedInteger_8':
    case 'UnsignedInteger_16':
    case 'UnsignedInteger_32':
      return ParamType.UNSIGNED_INTEGER;
    case 'SinglePrecisionFloatingPoint':
      return ParamType.FLOATING_POINT;
    case 'VisibleString':
      return ParamType.STRING;
    case 'Date':
      return ParamType.DATE;
    default:
      return ParamType.STRING;
  }
};

export const transformAhfParamsToParam = (
  ahfParams: AhfParam[],
  paths: DevicePaths,
  pathId: string,
): Param[] => {
  return ahfParams.map((ahfParam) => {
    paths[`${pathId}/${ahfParam.ParamID}`] = ahfParam.Name;
    return ({
      accessType: ahfParam.AccessType,
      description: ahfParam.Description,
      name: ahfParam.Name,
      paramEnumNumb: ahfParam.ParamEnumNumb,
      paramEnumText: ahfParam.ParamEnumText,
      paramId: ahfParam.ParamID,
      paramType: transformAhfParamTypeToParamType(
        ahfParam.ParamType,
        ahfParam.ParamID,
        ahfParam.ParamEnumNumb,
      ),
      unit: ahfParam.Unit,
      value: ahfParam.Value,
    } as unknown) as Param;
  });
};
