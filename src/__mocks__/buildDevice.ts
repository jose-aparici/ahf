import { DeviceAhf } from 'domain/device/device.types';

const DEFAULT_DEVICE: DeviceAhf = {
  info: {
    Company: '1',
    FW: 'FW',
    ID: 1,
    Status: 1,
    Type: 'type',
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
                      ParamEnumText: ['1'],
                      ParamID: 1,
                      ParamType: 'paramType1',
                      Unit: 'unit1',
                      Value: 'value1',
                    },
                  ],
                },
              },
            },
            Params: null,
          },
        },
        Params: {
          ParData: [
            {
              AccessType: '1',
              Description: ['description1Eng', 'description1Ger'],
              Name: ['name1Eng', 'name1Ger'],
              ParamEnumNumb: 1,
              ParamEnumText: ['1'],
              ParamID: 1,
              ParamType: 'paramType1',
              Unit: 'unit1',
              Value: 'value1',
            },
          ],
        },
      },
    },
  },
};

export const buildDevice = (overrides = {}): DeviceAhf => ({
  ...DEFAULT_DEVICE,
  ...overrides,
});
