import { Resource } from 'domain/resource/resource.type';

import { State } from './initialState';

export const resourceChangeReducer = (
  state: State,
  resource: Resource,
): State => {
  return { ...state, ...resource };
};
