import { State } from '../initialState';

const DEFAULT_STATE: State = {
  folder: {
    id: '',
    label: '',
    children: [],
    params: [
      {
        accessType: 'accessType1',
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
        accessType: 'accessType2',
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
        accessType: 'accessType3',
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
};

export const buildState = (overrides = {}): State => ({
  ...DEFAULT_STATE,
  ...overrides,
});
