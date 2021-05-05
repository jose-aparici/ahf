import { buildDeviceAhf } from '__mocks__/buildDevice';
import { deviceStructureReducer } from 'contexts/store/reducer_device_structure';

import { AhfDevice } from 'domain/ahf-device/ahf-device.types';

import { initialState, State } from '../../../contexts/store/initialState';
import { deviceInfoReducer } from '../../../contexts/store/reducer_device_info';
import { findResourceByPath } from '../resource.utils';

describe('resource utils', () => {
  let state: State;
  beforeEach(() => {
    const deviceAhf: AhfDevice = buildDeviceAhf();
    const deviceInfoState = deviceInfoReducer(initialState, deviceAhf.info);
    state = deviceStructureReducer(deviceInfoState, deviceAhf.structure);
  });

  describe('find resource by path', () => {
    it('should return the finded folder', () => {
      const validFolderPath = '/devices/1/folder1/folder1.1/folder1.2';
      const result = findResourceByPath(
        validFolderPath,
        state.devices[1].structure,
      );
      expect(result?.folder.id).toBe(validFolderPath);
      expect(result?.currentParamIndex).toBe(undefined);
    });

    it('should return the finded param', () => {
      const validParamPath = '/devices/1/folder1/folder1.1/folder1.2/2';
      const result = findResourceByPath(
        validParamPath,
        state.devices[1].structure,
      );
      expect(result?.folder.id).toBe('/devices/1/folder1/folder1.1/folder1.2');
      expect(result?.currentParamIndex).toBe(0);
    });

    it('should return  undefined when folder does not exists', () => {
      const notValidFolderPath = '/devices/1/nonExists';
      const result = findResourceByPath(
        notValidFolderPath,
        state.devices[1].structure,
      );
      expect(result).toBe(undefined);
    });

    it('should return undefined when param does not exists', () => {
      const notValidParamPath = '/devices/1/folder1/folder1.1/folder1.2/11';
      const result = findResourceByPath(
        notValidParamPath,
        state.devices[1].structure,
      );
      expect(result).toBe(undefined);
    });
  });
});
