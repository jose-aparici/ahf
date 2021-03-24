import { ParamRead } from 'domain/param/param.types';

import { buildState } from '../__mocks__/buildState';
import { State } from '../initialState';
import { paramReadReducer } from '../reducer_param_read';

describe('reducer device param update', () => {
  it('should update device param', () => {
    const state: State = buildState();

    const payload: ParamRead = {
      DeviceID: 1,
      FolderName: 'folder1',
      Marker: 1,
      ParamID: 1,
      ParamPos: 1,
      Value: 'valueUpdated',
    };

    const result = paramReadReducer(state, payload);

    expect(result.params.ParData[0].Value).toEqual(payload.Value);
  });
});
