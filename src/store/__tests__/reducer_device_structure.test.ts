import { buildDeviceAhf } from '__mocks__/buildDevice';
import { buildState } from 'store/__mocks__/buildState';
import { State } from 'store/initialState';
import { deviceStructureReducer } from 'store/reducer_device_structure';

import { AhfDeviceStructure } from 'domain/ahf-device/ahf-device.types';

describe('reducer device structure', () => {
  it('should set device structure', () => {
    const state: State = buildState();
    const payload: AhfDeviceStructure = buildDeviceAhf().structure;

    const result = deviceStructureReducer(state, payload);

    expect(result).toMatchObject({
      devices: {
        1: {
          info: {
            status: 1,
          },
          structure: {
            id: '/devices/1',
            label: 'folder1',
            children: [
              {
                id: '/devices/1/folder1.1',
                label: 'folder1.1',
                children: [
                  {
                    id: '/devices/1/folder1.1/folder1.2',
                    label: 'folder1.2',
                    children: [],
                    params: [
                      {
                        accessType: '1',
                        description: ['description1Eng', 'description1Ger'],
                        name: ['name1Eng', 'name1Ger'],
                        paramEnumNumb: 1,
                        paramEnumText: ['1'],
                        paramId: 1,
                        paramType: 'paramType1',
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
                paramEnumText: ['1'],
                paramId: 1,
                paramType: 'paramType1',
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
