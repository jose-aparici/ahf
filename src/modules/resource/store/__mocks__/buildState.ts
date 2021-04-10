import { AccessType } from 'domain/param/param.types';

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
        paramEnumNumb: 1,
        paramEnumText: ['paramEnumText1'],
        paramId: 1,
        paramType: 'paramType1',
        unit: 'unit1',
        value: 'value',
      },
      {
        accessType: AccessType.READ_ONLY,
        description: ['description2'],
        name: ['name2'],
        paramEnumNumb: 2,
        paramEnumText: ['paramEnumText2'],
        paramId: 2,
        paramType: 'paramType2',
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
        paramType: 'paramType3',
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
