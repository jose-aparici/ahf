import { Action } from './actions';
import { State } from './initialState';
import { DEV_INFO } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case DEV_INFO:
      return {
        ...state,
        devices: {
          ...state.devices,
          [payload.ID]: {
            ...state.devices[payload.ID],
            info: payload,
          },
        },
      };
    default:
      return state;
  }
};