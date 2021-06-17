import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';

import { State } from './reducer';

export const paramReadReducer = (
  state: State,
  paramRead: AhfParamRead,
): State => {
  const findParamToUpdate = state.folder.params.find(
    (param) => param.paramId === paramRead.ParamID,
  );

  if (findParamToUpdate) {
    findParamToUpdate.value = paramRead.Value;
    findParamToUpdate.read = {
      deviceId: paramRead.DeviceID,
      folderName: paramRead.FolderName,
      marker: paramRead.Marker,
      paramPos: paramRead.ParamPos,
    };
  }

  return { ...state };
};
