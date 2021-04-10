import { buildDeviceAhf } from '__mocks__/buildDevice';
import { deviceStructureReducer } from 'store/reducer_device_structure';

import { AhfDevice } from 'domain/ahf-device/ahf-device.types';

import { initialState, State } from '../../../store/initialState';
import { deviceInfoReducer } from '../../../store/reducer_device_info';
import { getIdsWithChildren } from '../folder.utils';

describe('folder utils', () => {
  describe('get ids with children', () => {
    let state: State;
    beforeEach(() => {
      const deviceAhf: AhfDevice = buildDeviceAhf();
      const deviceInfoState = deviceInfoReducer(initialState, deviceAhf.info);
      state = deviceStructureReducer(deviceInfoState, deviceAhf.structure);
    });

    it('should return the ids with children', () => {
      const result = getIdsWithChildren(state.devices[1].structure, []);
      expect(result).toEqual([
        '/devices/1/folder1',
        '/devices/1/folder1/folder1.1',
      ]);
    });
  });
});
