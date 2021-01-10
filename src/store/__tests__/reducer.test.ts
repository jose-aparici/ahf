import { buildState } from 'store/__mocks__/buildState';
import { Action } from 'store/actions';
import { reducer } from 'store/reducer';
import { DEVICE_INFO, DEVICE_STRUCTURE, PARAM_READ } from 'store/types';

import { DeviceInfo, DeviceStructure } from 'domain/device/device.types';
import { ParamRead } from 'domain/param/param.types';

import * as DeviceInfoReducerModule from '../reducer_device_info';
import * as DeviceStructureReducerModule from '../reducer_device_structure';
import * as ParamReadReducerModule from '../reducer_param_read';

describe('reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('device info', () => {
    it('should be called', () => {
      const state = buildState();
      const deviceInfoReducerMock = jest
        .spyOn(DeviceInfoReducerModule, 'deviceInfoReducer')
        .mockReturnValue(buildState());
      const deviceInfoAction: Action = {
        type: DEVICE_INFO,
        payload: {} as DeviceInfo,
      };
      reducer(state, deviceInfoAction);

      expect(deviceInfoReducerMock).toHaveBeenCalledTimes(1);
      expect(deviceInfoReducerMock).toHaveBeenCalledWith(
        state,
        deviceInfoAction.payload,
      );
    });
  });

  describe('device structure', () => {
    it('should be called', () => {
      const state = buildState();
      const deviceStructureReducerMock = jest
        .spyOn(DeviceStructureReducerModule, 'deviceStructureReducer')
        .mockReturnValue(buildState());
      const deviceStructureAction: Action = {
        type: DEVICE_STRUCTURE,
        payload: {} as DeviceStructure,
      };
      reducer(state, deviceStructureAction);

      expect(deviceStructureReducerMock).toHaveBeenCalledTimes(1);
      expect(deviceStructureReducerMock).toHaveBeenCalledWith(
        state,
        deviceStructureAction.payload,
      );
    });
  });

  describe('param read', () => {
    it('should be called', () => {
      const state = buildState();
      const paramReadReducerMock = jest
        .spyOn(ParamReadReducerModule, 'paramReadReducer')
        .mockReturnValue(buildState());
      const paramReadAction: Action = {
        type: PARAM_READ,
        payload: {} as ParamRead,
      };
      reducer(state, paramReadAction);

      expect(paramReadReducerMock).toHaveBeenCalledTimes(1);
      expect(paramReadReducerMock).toHaveBeenCalledWith(
        state,
        paramReadAction.payload,
      );
    });
  });
});
