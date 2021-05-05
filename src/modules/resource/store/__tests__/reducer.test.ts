import { PARAM_READ } from 'contexts/store/types';

import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfAction } from 'domain/ahf/ahf.types';

import { buildState } from '../__mocks__/buildState';
import { reducer } from '../reducer';
import * as ParamReadReducerModule from '../reducer_param_read';

describe('reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('param read', () => {
    it('should be called', () => {
      const state = buildState();
      const paramReadReducerMock = jest
        .spyOn(ParamReadReducerModule, 'paramReadReducer')
        .mockReturnValue(buildState());
      const paramReadAction: AhfAction = {
        type: PARAM_READ,
        payload: {} as AhfParamRead,
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
