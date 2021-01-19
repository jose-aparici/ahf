import { PARAM_READ } from 'store/types';

import { AhfAction } from 'domain/context/context.types';
import { ParamRead } from 'domain/param/param.types';

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
