import { ParamType, ParamValidation } from 'domain/param/param.types';

export const PARAMS_VALIDATION: Record<ParamType, ParamValidation> = {
  FloatingPoint: { regex: '^[+-]?\\d+(.\\d+)?$' },
  SignedInteger: { regex: '^[+-]?\\d+$' },
  UnsignedInteger: { regex: '^\\d+$' },
  String: {},
  Date: {},
  Enum: {},
  Ip: {
    regex:
      '^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$',
  },
  Mac: {
    regex:
      '^[0-9a-fA-F]{1,2}([.:-])(?:[0-9a-fA-F]{1,2}\\1){4}[0-9a-fA-F]{1,2}$',
  },
};
