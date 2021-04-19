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
      '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$',
  },
  Mac: {
    regex:
      '^[0-9a-fA-F]{1,2}([.:-])(?:[0-9a-fA-F]{1,2}\\1){4}[0-9a-fA-F]{1,2}$',
  },
};
