import { buildDevice } from '__mocks__/buildDevice';

import { Device } from 'domain/device/device.types';

export interface State {
  devices: Record<number, Device>;
}
export const initialState: State = {
  devices: {
    1: buildDevice({
      info: {
        ID: 1,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 1,
      },
      structure: {
        DeviceID: 1,
        FolderNames: ['Folder1', 'Folder2', 'Folder3'],
        FolderData: {
          Folder1: {
            ParData: [
              {
                ParamID: 1,
                Name: [
                  'Nennstrom',
                  'Rated current',
                  '额定电流',
                  'Courant nominal',
                ],
                Description: [
                  'Gerätenennstrom',
                  'Rated current of device',
                  'Rated current of device',
                  'Valeur efficace courant nominal',
                ],
                ParamType: 'SinglePrecisionFloatingPoint',
                AccessType: 'READ_ONLY',
                Unit: 'A',
                ParamEnumText: [],
                ParamEnumNumb: 0,
              },
              {
                ParamID: 2,
                Name: [
                  'Nennstrom',
                  'Rated current',
                  '额定电流',
                  'Courant nominal',
                ],
                Description: [
                  'Gerätenennstrom',
                  'Rated current of device',
                  'Rated current of device',
                  'Valeur efficace courant nominal',
                ],
                ParamType: 'SinglePrecisionFloatingPoint',
                AccessType: 'READ_ONLY',
                Unit: 'A',
                ParamEnumText: [],
                ParamEnumNumb: 0,
              },
              {
                ParamID: 3,
                Name: [
                  'Nennstrom',
                  'Rated current',
                  '额定电流',
                  'Courant nominal',
                ],
                Description: [
                  'Gerätenennstrom',
                  'Rated current of device',
                  'Rated current of device',
                  'Valeur efficace courant nominal',
                ],
                ParamType: 'SinglePrecisionFloatingPoint',
                AccessType: 'READ_ONLY',
                Unit: 'A',
                ParamEnumText: [],
                ParamEnumNumb: 0,
              },
              {
                ParamID: 4,
                Name: [
                  'Nennstrom',
                  'Rated current',
                  '额定电流',
                  'Courant nominal',
                ],
                Description: [
                  'Gerätenennstrom',
                  'Rated current of device',
                  'Rated current of device',
                  'Valeur efficace courant nominal',
                ],
                ParamType: 'SinglePrecisionFloatingPoint',
                AccessType: 'READ_ONLY',
                Unit: 'A',
                ParamEnumText: [],
                ParamEnumNumb: 0,
              },
              {
                ParamID: 5,
                Name: [
                  'Nennstrom',
                  'Rated current',
                  '额定电流',
                  'Courant nominal',
                ],
                Description: [
                  'Gerätenennstrom',
                  'Rated current of device',
                  'Rated current of device',
                  'Valeur efficace courant nominal',
                ],
                ParamType: 'SinglePrecisionFloatingPoint',
                AccessType: 'READ_ONLY',
                Unit: 'A',
                ParamEnumText: [],
                ParamEnumNumb: 0,
              },
              {
                ParamID: 6,
                Name: [
                  'Nennstrom',
                  'Rated current',
                  '额定电流',
                  'Courant nominal',
                ],
                Description: [
                  'Gerätenennstrom',
                  'Rated current of device',
                  'Rated current of device',
                  'Valeur efficace courant nominal',
                ],
                ParamType: 'SinglePrecisionFloatingPoint',
                AccessType: 'READ_ONLY',
                Unit: 'A',
                ParamEnumText: [],
                ParamEnumNumb: 0,
              },
            ],
          },
          Folder2: {
            ParData: [
              {
                ParamID: 2,
                Name: [
                  'Nennstrom',
                  'Rated current',
                  '额定电流',
                  'Courant nominal',
                ],
                Description: [
                  'Gerätenennstrom',
                  'Rated current of device',
                  'Rated current of device',
                  'Valeur efficace courant nominal',
                ],
                ParamType: 'SinglePrecisionFloatingPoint',
                AccessType: 'READ_ONLY',
                Unit: 'A',
                ParamEnumText: [],
                ParamEnumNumb: 0,
                Value: 1,
              },
            ],
          },
          Folder3: {
            ParData: [
              {
                ParamID: 2,
                Name: [
                  'Nennstrom',
                  'Rated current',
                  '额定电流',
                  'Courant nominal',
                ],
                Description: [
                  'Gerätenennstrom',
                  'Rated current of device',
                  'Rated current of device',
                  'Valeur efficace courant nominal',
                ],
                ParamType: 'SinglePrecisionFloatingPoint',
                AccessType: 'READ_ONLY',
                Unit: 'A',
                ParamEnumText: [],
                ParamEnumNumb: 0,
                Value: 1,
              },
            ],
          },
        },
      },
    }),
    2: buildDevice({
      info: {
        ID: 1,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 1,
      },
    }),
    3: buildDevice({
      info: {
        ID: 1,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 0,
      },
    }),
    4: buildDevice({
      info: {
        ID: 1,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 0,
      },
    }),
    5: buildDevice({
      info: {
        ID: 1,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 0,
      },
    }),
    6: buildDevice({
      info: {
        ID: 1,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 0,
      },
    }),
    7: buildDevice({
      info: {
        ID: 1,
        Type: 'AHF Sync Module',
        FW: 'V04.01.071uds',
        Company: 'Schaffner EMV AG.',
        Status: 0,
      },
    }),
  },
};
