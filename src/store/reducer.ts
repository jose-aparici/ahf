import {
  DeviceInfo,
  DeviceParamUpdate,
  DeviceStructure,
} from 'domain/ahf/ahf.types';
import { Device } from 'domain/device/device.types';

import { Action } from './actions';
import { State } from './initialState';
import { DEVICE_INFO, DEVICE_PARAM_UPDATE, DEVICE_STRUCTURE } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case DEVICE_INFO:
      const deviceInfo = payload as DeviceInfo;
      return {
        ...state,
        devices: {
          ...state.devices,
          [deviceInfo.ID]: {
            ...state.devices[deviceInfo.ID],
            info: deviceInfo,
          } as Device,
        },
      };

    case DEVICE_STRUCTURE:
      const deviceStructure = payload as DeviceStructure;
      return {
        ...state,
        devices: {
          ...state.devices,
          [deviceStructure.DeviceID]: {
            ...state.devices[deviceStructure.DeviceID],
            info: {
              ...state.devices[deviceStructure.DeviceID].info,
              Status: 1,
            },
            structure: deviceStructure,
          } as Device,
        },
      };
    case DEVICE_PARAM_UPDATE:
      const paramUpdate = payload as DeviceParamUpdate;
      return {
        ...state,
        devices: {
          ...state.devices,
          [paramUpdate.DeviceID]: {
            ...state.devices[paramUpdate.DeviceID],
            structure: {
              ...state.devices[paramUpdate.DeviceID].structure,
              FolderData: {
                ...state.devices[paramUpdate.DeviceID].structure.FolderData,
                [paramUpdate.FolderName]: {
                  ...state.devices[paramUpdate.DeviceID].structure.FolderData[
                    paramUpdate.FolderName
                  ],
                  ParData: state.devices[
                    paramUpdate.DeviceID
                  ].structure.FolderData[
                    paramUpdate.FolderName
                  ].ParData.map((param) =>
                    param.ParamID === paramUpdate.ParamID
                      ? { ...param, Value: paramUpdate.Value }
                      : param,
                  ),
                },
              },
            },
          } as Device,
        },
      };

    default:
      return state;
  }
};
