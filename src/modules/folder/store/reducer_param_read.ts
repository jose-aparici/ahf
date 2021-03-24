import { ParamRead } from 'domain/param/param.types';

import { State } from './initialState';

export const paramReadReducer = (state: State, paramRead: ParamRead): State => {
  debugger;
  const findParamToUpdate = state.params.ParData.find(
    (param) => param.ParamID === paramRead.ParamID,
  );

  if (findParamToUpdate) {
    findParamToUpdate.Value = paramRead.Value;
  }

  return { ...state };
};
