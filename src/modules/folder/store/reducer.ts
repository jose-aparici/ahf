import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { Folder } from 'domain/folder/folder.types';

import { Action } from './actions';
import { State } from './initialState';
import { paramReadReducer } from './reducer_param_read';
import { PARAM_READ } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case 'FOLDER_CHANGE':
      return { ...state, folder: payload as Folder };
    case PARAM_READ:
      return paramReadReducer(state, payload as AhfParamRead);

    default:
      return state;
  }
};
