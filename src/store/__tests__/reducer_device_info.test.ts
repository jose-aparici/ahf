import { buildDevice } from '__mocks__/buildDevice';
import { buildState } from 'store/__mocks__/buildState';
import { deviceInfoReducer } from 'store/reducer_device_info';

describe('reducer device info', () => {
  it('should set device info', () => {
    const state = buildState({ devices: {} });
    const payload = buildDevice().info;

    const result = deviceInfoReducer(state, payload);
    expect(result).toEqual({
      devices: {
        2: {
          info: payload,
        },
      },
    });
  });
});
