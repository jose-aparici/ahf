import { buildDevice } from '__mocks__/buildDevice';
import { buildState } from 'store/__mocks__/buildState';
import { State } from 'store/initialState';
import { deviceStructureReducer } from 'store/reducer_device_structure';

import { DeviceStructure } from 'domain/device/device.types';

describe('reducer device structure', () => {
  it('should set device structure', () => {
    const state: State = buildState();
    const payload: DeviceStructure = buildDevice().structure;

    const result = deviceStructureReducer(state, payload);
    debugger;
    expect(result).toEqual({
      devices: {
        1: {
          info: {
            Status: 1,
          },
          structure: {
            id: 'folder1',
            label: 'folder1',
            children: [
              {
                id: 'folder1.1',
                label: 'folder1.1',
                children: [
                  {
                    id: 'folder1.2',
                    label: 'folder1.2',
                    children: [],
                    params: [
                      {
                        AccessType: '1',
                        Description: ['description1Eng', 'description1Ger'],
                        Name: ['name1Eng', 'name1Ger'],
                        ParamEnumNumb: 1,
                        ParamEnumText: ['1'],
                        ParamID: 1,
                        ParamType: 'paramType1',
                        Unit: 'unit1',
                        Value: 'value1',
                      },
                    ],
                  },
                ],
                params: [],
              },
            ],
            params: [
              {
                AccessType: '1',
                Description: ['description1Eng', 'description1Ger'],
                Name: ['name1Eng', 'name1Ger'],
                ParamEnumNumb: 1,
                ParamEnumText: ['1'],
                ParamID: 1,
                ParamType: 'paramType1',
                Unit: 'unit1',
                Value: 'value1',
              },
            ],
          },
        },
      },
    });
  });
});
