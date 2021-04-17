import { ParamType, ParamValue } from 'domain/param/param.types';

import { ParamError } from './param.types';

export const validateValue = (
  type: ParamType,
  value: ParamValue,
): ParamError | undefined => {
  if (value === '') {
    return { text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.EMPTY' };
  }

  if (value === undefined) {
    return { text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.EMPTY' };
  }

  if (!validateFormat(type, value)) {
    return { text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' };
  }

  return undefined;
};

const validateFormat = (type: ParamType, value: ParamValue): boolean => {
  switch (type) {
    case ParamType.SINGLE_PRECISION_FLOATING_POINT:
      return new RegExp(/^[+-]?\d+(\.\d+)?$/).test(value as string);

    default:
      return false;
  }
};
