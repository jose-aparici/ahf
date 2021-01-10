import { buildState } from 'store/__mocks__/buildState';
import { Action } from 'store/actions';
import { reducer } from 'store/reducer';
import {
  DEVICE_INFO,
  DEVICE_PARAM_UPDATE,
  DEVICE_STRUCTURE,
} from 'store/types';

import {
  DeviceInfo,
  DeviceParamUpdate,
  DeviceStructure,
} from 'domain/ahf/ahf.types';

import * as DeviceInfoReducerModule from '../reducer_device_info';
import * as DeviceParamUpdateReducerModule from '../reducer_device_param_update';
import * as DeviceStructureReducerModule from '../reducer_device_structure';

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

  describe('device param update', () => {
    it('should be called', () => {
      const state = buildState();
      const deviceParamUpdateReducerMock = jest
        .spyOn(DeviceParamUpdateReducerModule, 'deviceParamUpdateReducer')
        .mockReturnValue(buildState());
      const deviceUpdateParamAction: Action = {
        type: DEVICE_PARAM_UPDATE,
        payload: {} as DeviceParamUpdate,
      };
      reducer(state, deviceUpdateParamAction);

      expect(deviceParamUpdateReducerMock).toHaveBeenCalledTimes(1);
      expect(deviceParamUpdateReducerMock).toHaveBeenCalledWith(
        state,
        deviceUpdateParamAction.payload,
      );
    });
  });
});
