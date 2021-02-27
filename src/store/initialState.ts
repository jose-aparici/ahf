import { buildDevice } from '__mocks__/buildDevice';

import { Device } from 'domain/device/device.types';

import data from '../__mocks__/device-static.json';

export interface State {
  devices: Record<number, Device>;
}
export const initialState: State = {
  devices: {
    1: (data as unknown) as Device,
    2: buildDevice({
      info: {
        ID: 2,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 1,
      },
    }),
    3: buildDevice({
      info: {
        ID: 3,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 0,
      },
    }),
    4: buildDevice({
      info: {
        ID: 4,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 0,
      },
    }),
    5: buildDevice({
      info: {
        ID: 5,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 0,
      },
    }),
    6: buildDevice({
      info: {
        ID: 6,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 0,
      },
    }),
    7: buildDevice({
      info: {
        ID: 7,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 0,
      },
    }),
  },
};
