import {
  DeviceInfoAction,
  DeviceStructureAction,
  DeviceUpdateParamAction,
} from 'store/actions';
import { initialState } from 'store/initialState';
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
      const state = initialState;
      const deviceInfoReducerMock = jest.spyOn(
        DeviceInfoReducerModule,
        'deviceInfoReducer',
      );
      const action: DeviceInfoAction = {
        type: DEVICE_INFO,
        payload: {} as DeviceInfo,
      };
      reducer(state, action);

      expect(deviceInfoReducerMock).toHaveBeenCalledTimes(1);
      expect(deviceInfoReducerMock).toHaveBeenCalledWith(state, action.payload);
    });
  });

  describe('device structure', () => {
    it('should be called', () => {
      const state = initialState;
      const deviceStructureReducerMock = jest.spyOn(
        DeviceStructureReducerModule,
        'deviceStructureReducer',
      );
      const action: DeviceStructureAction = {
        type: DEVICE_STRUCTURE,
        payload: {} as DeviceStructure,
      };
      reducer(state, action);

      expect(deviceStructureReducerMock).toHaveBeenCalledTimes(1);
      expect(deviceStructureReducerMock).toHaveBeenCalledWith(
        state,
        action.payload,
      );
    });
  });

  describe('device param update', () => {
    it('should be called', () => {
      const state = initialState;
      const deviceParamUpdateReducerMock = jest.spyOn(
        DeviceParamUpdateReducerModule,
        'deviceParamUpdateReducer',
      );
      const action: DeviceUpdateParamAction = {
        type: DEVICE_PARAM_UPDATE,
        payload: {} as DeviceParamUpdate,
      };
      reducer(state, action);

      expect(deviceParamUpdateReducerMock).toHaveBeenCalledTimes(1);
      expect(deviceParamUpdateReducerMock).toHaveBeenCalledWith(
        state,
        action.payload,
      );
    });
  });
});
