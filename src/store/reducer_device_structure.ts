import { DeviceStructure } from 'domain/ahf/ahf.types';

import { State } from './initialState';

export const deviceStructureReducer = (
  state: State,
  deviceStructure: DeviceStructure,
): State => {
  if (
    state.devices[deviceStructure.DeviceID] &&
    state.devices[deviceStructure.DeviceID].info
  ) {
    state.devices[deviceStructure.DeviceID].info.Status = 1;
    state.devices[deviceStructure.DeviceID].structure = deviceStructure;
  }

  return { ...state };
};
