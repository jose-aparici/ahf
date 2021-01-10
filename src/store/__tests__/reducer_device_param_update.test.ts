import { buildDevice } from '__mocks__/buildDevice';
import { buildState } from 'store/__mocks__/buildState';
import { State } from 'store/initialState';
import { paramReadReducer } from 'store/reducer_param_read';

import { ParamRead } from 'domain/param/param.types';

describe('reducer device param update', () => {
  it('should update device param', () => {
    const state: State = buildState({
      devices: {
        1: buildDevice(),
      },
    });

    const payload: ParamRead = {
      DeviceID: 1,
      FolderName: 'folder1',
      Marker: 1,
      ParamID: 1,
      ParamPos: 1,
      Value: 'valueUpdated',
    };

    const result = paramReadReducer(state, payload);

    const stateUpdated = {
      ...state,
    };

    stateUpdated.devices[1].structure.FolderData['folder1'].ParData[0].Value =
      'valueUpdated';

    expect(result).toEqual(stateUpdated);
  });
});
