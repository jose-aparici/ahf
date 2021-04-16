import { AccessType, ParamType } from 'domain/param/param.types';

import { State } from '../initialState';

const DEFAULT_STATE: State = {
  folder: {
    id: '',
    label: '',
    isMainFolder: true,
    deviceId: '1',
    children: [],
    params: [
      {
        accessType: AccessType.READ_ONLY,
        description: ['description1'],
        name: ['name1'],
        paramEnumNumb: 0,
        paramEnumText: ['paramEnumText1'],
        paramId: 1,
        paramType: ParamType.SINGLE_PRECISION_FLOATING_POINT,
        unit: 'unit1',
        value: 1.1,
      },
      {
        accessType: AccessType.READ_ONLY,
        description: ['description2'],
        name: ['name2'],
        paramEnumNumb: 2,
        paramEnumText: ['paramEnumText2'],
        paramId: 2,
        paramType: ParamType.ENUM,
        unit: 'unit2',
        value: 2,
      },
      {
        accessType: AccessType.READ_WRITE,
        description: ['description3'],
        name: ['name3'],
        paramEnumNumb: 3,
        paramEnumText: ['paramEnumText3'],
        paramId: 3,
        paramType: ParamType.ENUM,
        unit: 'unit3',
        value: 3,
      },
    ],
  },
  currentParamIndex: undefined,
};

export const buildState = (overrides = {}): State => ({
  ...DEFAULT_STATE,
  ...overrides,
});
