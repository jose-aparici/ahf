import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfCommand } from 'domain/ahf/ahf.types';
import { Action } from 'domain/app/app.types';
import { Folder } from 'domain/folder/folder.types';
import { Resource, ResourceCommand } from 'domain/resource/resource.type';

import { paramReadReducer } from './reducer_param_read';
import { resourceChangeReducer } from './reducer_resource_change';

export interface State {
  folder: Folder;
  currentParamIndex: number | undefined;
}

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case ResourceCommand.RESOURCE_CHANGE:
      return resourceChangeReducer(state, payload as Resource);
    case AhfCommand.PARAM_DETAIL:
      return paramReadReducer(state, payload as AhfParamRead);

    default:
      return state;
  }
};
