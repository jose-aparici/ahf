import i18next from 'i18next';

import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';

import { AHF_LANGUAGES } from '../../../domain/languages/languages.constants';
import { State } from './initialState';

export const paramReadReducer = (
  state: State,
  paramRead: AhfParamRead,
): State => {
  const findParamToUpdate = state.folder.params.find(
    (param) => param.paramId === paramRead.ParamID,
  );

  if (findParamToUpdate) {
    if (
      paramRead.ParamID === 200 &&
      i18next.language !== AHF_LANGUAGES[paramRead.Value as number].locale
    ) {
      i18next.changeLanguage(AHF_LANGUAGES[paramRead.Value as number].locale);
    }
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
