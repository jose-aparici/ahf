import { State } from 'store/initialState';
import { deviceParamUpdateReducer } from 'store/reducer_device_param_update';

import { DeviceInfo, DeviceParamUpdate } from 'domain/ahf/ahf.types';

describe('reducer device param update', () => {
  it('should update device param', () => {
    const state: State = {
      devices: {
        1: {
          info: {} as DeviceInfo,
          structure: {
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
          },
        },
      },
    };

    const payload: DeviceParamUpdate = {
      DeviceID: 1,
      FolderName: 'folder1',
      Marker: 1,
      ParamID: 1,
      ParamPos: 1,
      Value: 'valueUpdated',
    };

    const result = deviceParamUpdateReducer(state, payload);

    const stateUpdated = {
      ...state,
    };

    stateUpdated.devices[1].structure.FolderData['folder1'].ParData[0].Value =
      'valueUpdated';

    expect(result).toEqual(stateUpdated);
  });
});
