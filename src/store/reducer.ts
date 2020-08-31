import { Action } from './actions';
import { State } from './initialState';
import { ADD_DATA } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
};
