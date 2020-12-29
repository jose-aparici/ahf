import { DeviceParamUpdate } from 'domain/ahf/ahf.types';
import { Device } from 'domain/device/device.types';

import { State } from './initialState';

export const deviceParamUpdateReducer = (
  state: State,
  paramUpdate: DeviceParamUpdate,
): State => {
  return state.devices[paramUpdate.DeviceID] &&
    state.devices[paramUpdate.DeviceID].structure
    ? {
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
      }
    : state;
};
