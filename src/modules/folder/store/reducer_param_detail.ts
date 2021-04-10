import { Folder } from 'domain/folder/folder.types';

import { State } from './initialState';

export const paramDetailReducer = (state: State, folder: Folder): State => ({
  ...state,
  folder,
});
