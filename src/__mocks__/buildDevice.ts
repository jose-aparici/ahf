import { AhfDevice } from 'domain/ahf-device/ahf-device.types';

import { AhfDeviceType } from '../domain/ahf-device/ahf-device.types';

const DEFAULT_DEVICE_AHF: AhfDevice = {
  info: {
    Company: '1',
    FW: 'FW',
    ID: 1,
    Status: 1,
    Type: AhfDeviceType.AHF_SYNC_MODULE,
    TypeName: 'TypeName',
  },
  structure: {
    DeviceID: 1,
    FolderNames: ['folder1', 'folder2', 'folder3'],
    FolderData: {
      folder1: {
        Folders: {
          'folder1.1': {
            Folders: {
              'folder1.2': {
                Folders: {},
                Params: {
                  ParData: [
                    {
                      AccessType: '1',
                      Description: ['description1Eng', 'description1Ger'],
                      Name: ['name1Eng', 'name1Ger'],
                      ParamEnumNumb: 1,
                      ParamEnumText: { 1: ['1'] },
                      ParamID: 2,
                      ParamType: 'SignedInteger_8',
                      Unit: 'unit1',
                      Value: 'value1',
                    },
                  ],
                },
                Names: ['names'],
              },
            },
            Params: null,
            Names: ['names'],
          },
        },
        Params: {
          ParData: [
            {
              AccessType: '1',
              Description: ['description1Eng', 'description1Ger'],
              Name: ['name1Eng', 'name1Ger'],
              ParamEnumNumb: 1,
              ParamEnumText: { 1: ['1'] },
              ParamID: 1,
              ParamType: 'SignedInteger_8',
              Unit: 'unit1',
              Value: 'value1',
            },
          ],
        },
        Names: ['names'],
      },
    },
  },
};

export const buildDeviceAhf = (overrides = {}): AhfDevice => ({
  ...DEFAULT_DEVICE_AHF,
  ...overrides,
});
