import { DeviceParamUpdate } from 'domain/ahf/ahf.types';

import { State } from './initialState';

export const deviceParamUpdateReducer = (
  state: State,
  paramUpdate: DeviceParamUpdate,
): State => {
  if (
    state.devices[paramUpdate.DeviceID] &&
    state.devices[paramUpdate.DeviceID].structure
  ) {
    const findParamToUpdate = state.devices[
      paramUpdate.DeviceID
    ].structure.FolderData[paramUpdate.FolderName].ParData.find(
      (param) => param.ParamID === paramUpdate.ParamID,
    );
    if (findParamToUpdate) {
      findParamToUpdate.Value = paramUpdate.Value;
    }
  }

  return { ...state };
};
