import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';

import { State } from './initialState';

export const paramReadReducer = (
  state: State,
  paramRead: AhfParamRead,
): State => {
  if (
    state.devices[paramRead.DeviceID] &&
    state.devices[paramRead.DeviceID].structure
  ) {
    /* const findParamToUpdate = state.devices[
      paramRead.DeviceID
    ].structure.FolderData[paramRead.FolderName].Params.ParData.find(
      (param) => param.ParamID === paramRead.ParamID,
    );
    if (findParamToUpdate) {
      findParamToUpdate.Value = paramRead.Value;
    } */
  }

  return { ...state };
};
