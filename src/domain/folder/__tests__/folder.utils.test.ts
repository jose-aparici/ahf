import { buildDeviceAhf } from '__mocks__/buildDevice';
import { deviceStructureReducer } from 'store/reducer_device_structure';

import { DeviceAhf } from 'domain/ahf-device/ahf-device.types';

import { initialState, State } from '../../../store/initialState';
import { deviceInfoReducer } from '../../../store/reducer_device_info';
import { findFolderById } from '../folder.utils';

describe('folder utils', () => {
  describe('find by id', () => {
    let state: State;
    beforeEach(() => {
      const deviceAhf: DeviceAhf = buildDeviceAhf();
      const deviceInfoState = deviceInfoReducer(initialState, deviceAhf.info);
      state = deviceStructureReducer(deviceInfoState, deviceAhf.structure);
    });

    it('should return the finded folder', () => {
      const validFolderPath = '/devices/1/folder1.1/folder1.2';
      const result = findFolderById(
        validFolderPath,
        state.devices[1].structure,
      );
      expect(result?.id).toBe(validFolderPath);
    });

    it('should return  undefined', () => {
      const notValidFolderPath = '/devices/1/nonExists';
      const result = findFolderById(
        notValidFolderPath,
        state.devices[1].structure,
      );
      expect(result).toBe(undefined);
    });
  });
});