import { ParamRead } from 'domain/param/param.types';

import { Action } from './actions';
import { State } from './initialState';
import { paramReadReducer } from './reducer_param_read';
import { PARAM_READ } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  debugger;
  console.log('entra');
  switch (type) {
    case PARAM_READ:
      return paramReadReducer(state, payload as ParamRead);

    default:
      return state;
  }
};
