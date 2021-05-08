import { ParamType, ParamValue } from 'domain/param/param.types';

import { PARAMS_VALIDATION } from './param.constants';
import { ParamError } from './param.types';

export const stringToParamValue = (
  value: string,
  type: ParamType,
): ParamValue => {
  if (
    type !== ParamType.IP &&
    type !== ParamType.MAC &&
    type !== ParamType.STRING
  ) {
    return type === ParamType.DATE ? new Date(value).getTime() : Number(value);
  }

  return value;
};

export const isNumericKeyboardType = (type: ParamType): boolean => {
  return (
    type === ParamType.FLOATING_POINT ||
    type === ParamType.SIGNED_INTEGER ||
    type === ParamType.UNSIGNED_INTEGER ||
    type === ParamType.IP
  );
};

export const isKeyboardType = (type: ParamType): boolean => {
  return type !== ParamType.ENUM && type !== ParamType.DATE;
};

export const validateValue = (
  type: ParamType,
  value: ParamValue,
): ParamError | undefined => {
  if (!validateEmpty(value)) {
    return { text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.EMPTY' };
  }

  if (!validateUndefined(value)) {
    return { text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.EMPTY' };
  }

  if (!validateFormat(type, value)) {
    return { text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' };
  }

  return undefined;
};

const validateEmpty = (value: ParamValue) => value !== '';

const validateUndefined = (value: ParamValue) => value !== undefined;

const validateFormat = (type: ParamType, value: ParamValue): boolean => {
  const regex = PARAMS_VALIDATION[type].regex;
  return regex ? new RegExp(regex).test(value as string) : true;
};
