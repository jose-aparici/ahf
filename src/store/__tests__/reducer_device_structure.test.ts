import { State } from 'store/initialState';
import { deviceStructureReducer } from 'store/reducer_device_structure';

import { DeviceInfo, DeviceStructure } from 'domain/ahf/ahf.types';

describe('reducer device structure', () => {
  it('should set device structure', () => {
    const state: State = {
      devices: {
        1: {
          info: {} as DeviceInfo,
          structure: {} as DeviceStructure,
        },
      },
    };
    const payload: DeviceStructure = {
      DeviceID: 1,
      FolderNames: ['folder1', 'folder2', 'folder3'],
      FolderData: {
        folder1: {
          ParData: [
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
    };

    const result = deviceStructureReducer(state, payload);
    expect(result).toEqual({
      devices: {
        1: {
          info: {
            Status: 1,
          },
          structure: payload,
        },
      },
    });
  });
});
