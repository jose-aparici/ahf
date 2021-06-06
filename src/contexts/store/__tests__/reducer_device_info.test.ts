import { buildDeviceAhf } from '__mocks__/buildDevice';
import { buildState } from 'contexts/store/__mocks__/buildState';
import { deviceInfoReducer } from 'contexts/store/reducer_device_info';

describe('reducer device info', () => {
  it('should set device info', () => {
    const state = buildState({ devices: {} });
    const payload = buildDeviceAhf().info;

    const result = deviceInfoReducer(state, payload);
    expect(result).toEqual({
      devices: {
        1: {
          info: {
            company: payload.Company,
            fw: payload.FW,
            id: payload.ID,
            status: payload.Status,
            type: payload.Type,
            typeName: payload.TypeName,
          },
        },
      },
      initialDevice: 1,
      eventLogs: {
        fileName: '',
        logs: [],
      },
    });
  });
});
