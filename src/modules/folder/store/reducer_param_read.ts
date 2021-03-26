import { ParamReadAhf } from 'domain/ahf-param/ahf-param.types';

import { State } from './initialState';

export const paramReadReducer = (
  state: State,
  paramRead: ParamReadAhf,
): State => {
  debugger;
  const findParamToUpdate = state.params.ParData.find(
    (param) => param.ParamID === paramRead.ParamID,
  );

  if (findParamToUpdate) {
    findParamToUpdate.Value = paramRead.Value;
  }

  return { ...state };
};
