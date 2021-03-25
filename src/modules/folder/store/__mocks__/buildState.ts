import { State } from '../initialState';

const DEFAULT_STATE: State = {
  name: 'device1',
  params: {
    ParData: [
      {
        AccessType: 'accessType1',
        Description: ['description1'],
        Name: ['name1'],
        ParamEnumNumb: 1,
        ParamEnumText: ['paramEnumText1'],
        ParamID: 1,
        ParamType: 'paramType1',
        Unit: 'unit1',
        Value: 'value',
      },
      {
        AccessType: 'accessType2',
        Description: ['description2'],
        Name: ['name2'],
        ParamEnumNumb: 2,
        ParamEnumText: ['paramEnumText2'],
        ParamID: 2,
        ParamType: 'paramType2',
        Unit: 'unit2',
        Value: 2,
      },
      {
        AccessType: 'accessType3',
        Description: ['description3'],
        Name: ['name3'],
        ParamEnumNumb: 3,
        ParamEnumText: ['paramEnumText3'],
        ParamID: 3,
        ParamType: 'paramType3',
        Unit: 'unit3',
        Value: 3,
      },
    ],
  },
};

export const buildState = (overrides = {}): State => ({
  ...DEFAULT_STATE,
  ...overrides,
});
