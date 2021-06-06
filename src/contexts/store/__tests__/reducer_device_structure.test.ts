import { buildDeviceAhf } from '__mocks__/buildDevice';
import { buildState } from 'contexts/store/__mocks__/buildState';
import { State } from 'contexts/store/initialState';
import { deviceStructureReducer } from 'contexts/store/reducer_device_structure';

import { AhfDeviceStructure } from 'domain/ahf-device/ahf-device.types';
import { ParamType } from 'domain/param/param.types';

describe('reducer device structure', () => {
  it('should set device structure', () => {
    const state: State = buildState();
    const payload: AhfDeviceStructure = buildDeviceAhf().structure;

    const result = deviceStructureReducer(state, payload);

    expect(result).toMatchObject({
      devices: {
        1: {
          info: {},
          structure: {
            id: '/devices/1/folder1',
            label: 'folder1',
            deviceId: '1',
            isMainFolder: true,
            children: [
              {
                id: '/devices/1/folder1/folder1.1',
                label: 'folder1.1',
                deviceId: '1',
                isMainFolder: false,
                children: [
                  {
                    id: '/devices/1/folder1/folder1.1/folder1.2',
                    label: 'folder1.2',
                    children: [],
                    deviceId: '1',
                    isMainFolder: false,
                    params: [
                      {
                        accessType: '1',
                        description: ['description1Eng', 'description1Ger'],
                        name: ['name1Eng', 'name1Ger'],
                        paramEnumNumb: 1,
                        paramEnumText: { 1: ['1'] },
                        paramId: 2,
                        paramType: ParamType.ENUM,
                        unit: 'unit1',
                        value: 'value1',
                      },
                    ],
                  },
                ],
                params: [],
              },
            ],
            params: [
              {
                accessType: '1',
                description: ['description1Eng', 'description1Ger'],
                name: ['name1Eng', 'name1Ger'],
                paramEnumNumb: 1,
                paramEnumText: { 1: ['1'] },
                paramId: 1,
                paramType: ParamType.ENUM,
                unit: 'unit1',
                value: 'value1',
              },
            ],
          },
        },
      },
    });
  });
});
