import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';

import { State } from './initialState';

export const paramReadReducer = (
  state: State,
  paramRead: AhfParamRead,
): State => {
  debugger;
  const findParamToUpdate = state.params.find(
    (param) => param.paramId === paramRead.ParamID,
  );

  if (findParamToUpdate) {
    findParamToUpdate.value = paramRead.Value;
  }

  return { ...state };
};
