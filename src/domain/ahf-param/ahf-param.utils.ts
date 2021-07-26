import i18n from 'i18n';

import { DevicePaths } from 'domain/device/device.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param, ParamType } from 'domain/param/param.types';
import { SETTINGS_DEVICE_ID } from 'domain/settings/settings.contants';
import { DEVICES } from 'pages/App.routes';

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
  if (
    pathId.includes(`/${DEVICES}/${SETTINGS_DEVICE_ID}`) &&
    ahfParams.length > 0
  ) {
    const languageParam = ahfParams.find((param) => param.ParamID === 200);
    if (languageParam) {
      const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
        .position;
      if (
        languageParam.Value !== undefined &&
        currentLanguage !== languageParam.Value
      ) {
        i18n.changeLanguage(
          AHF_LANGUAGES[languageParam.Value as number].locale,
        );
      }
    }
  }
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
