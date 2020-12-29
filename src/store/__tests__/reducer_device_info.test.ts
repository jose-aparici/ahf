import { initialState } from 'store/initialState';
import { deviceInfoReducer } from 'store/reducer_device_info';

import { DeviceInfo } from 'domain/ahf/ahf.types';

describe('reducer device info', () => {
  it('should set device info', () => {
    const state = initialState;
    const payload: DeviceInfo = {
      Company: '1',
      FW: 'FW',
      ID: 1,
      Status: 1,
      Type: 'type',
    };

    const result = deviceInfoReducer(state, payload);
    expect(result).toEqual({
      devices: {
        1: {
          info: payload,
        },
      },
    });
  });
});
