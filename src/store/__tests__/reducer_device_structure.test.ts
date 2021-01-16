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
