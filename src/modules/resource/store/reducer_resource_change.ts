import { Resource } from 'domain/resource/resource.type';

import { State } from './reducer';

export const resourceChangeReducer = (
  state: State,
  resource: Resource,
): State => {
  return { ...state, ...resource };
};
