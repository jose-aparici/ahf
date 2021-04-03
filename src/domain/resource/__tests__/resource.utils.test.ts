import { buildDeviceAhf } from '__mocks__/buildDevice';
import { deviceStructureReducer } from 'store/reducer_device_structure';

import { AhfDevice } from 'domain/ahf-device/ahf-device.types';
import { Folder } from 'domain/folder/folder.types';
import { Param } from 'domain/param/param.types';

import { initialState, State } from '../../../store/initialState';
import { deviceInfoReducer } from '../../../store/reducer_device_info';
import { Resource } from '../resource.type';
import { findResourceByPath, isFolder, isParam } from '../resource.utils';

describe('folder utils', () => {
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
      ) as Folder;
      expect(result?.id).toBe(validFolderPath);
    });

    it('should return the finded param', () => {
      const validParamPath = '/devices/1/folder1/folder1.1/folder1.2/1';
      const result = findResourceByPath(
        validParamPath,
        state.devices[1].structure,
      ) as Param;
      expect(result?.paramId).toBe(1);
    });

    it('should return  undefined when folder does not exists', () => {
      const notValidFolderPath = '/devices/1/nonExists';
      const result = findResourceByPath(
        notValidFolderPath,
        state.devices[1].structure,
      );
      expect(result).toBe(undefined);
    });

    it('should return  undefined when param does not exists', () => {
      const notValidParamPath = '/devices/1/folder1/folder1.1/folder1.2/11';
      const result = findResourceByPath(
        notValidParamPath,
        state.devices[1].structure,
      );
      expect(result).toBe(undefined);
    });
  });

  describe('is folder', () => {
    it('should return true if resource is folder', () => {
      const validFolderPath = '/devices/1/folder1/folder1.1/folder1.2';
      const resourceFolder = findResourceByPath(
        validFolderPath,
        state.devices[1].structure,
      ) as Resource;

      const result = isFolder(resourceFolder);
      expect(result).toBe(true);
    });

    it('should return false if resource is not folder', () => {
      const validParamPath = '/devices/1/folder1/folder1.1/folder1.2/1';
      const resourceFolder = findResourceByPath(
        validParamPath,
        state.devices[1].structure,
      ) as Resource;

      const result = isFolder(resourceFolder);
      expect(result).toBe(false);
    });
  });

  describe('is param', () => {
    it('should return true if resource is param', () => {
      const validParamPath = '/devices/1/folder1/folder1.1/folder1.2/1';
      const resourceFolder = findResourceByPath(
        validParamPath,
        state.devices[1].structure,
      ) as Resource;

      const result = isParam(resourceFolder);
      expect(result).toBe(true);
    });

    it('should return false if resource is not param', () => {
      const validParamPath = '/devices/1/folder1/folder1.1/folder1.2';
      const resourceFolder = findResourceByPath(
        validParamPath,
        state.devices[1].structure,
      ) as Resource;

      const result = isParam(resourceFolder);
      expect(result).toBe(false);
    });
  });
});
