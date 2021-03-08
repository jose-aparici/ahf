import { DeviceStructure, FolderData } from 'domain/device/device.types';

import { DeviceNode } from '../domain/device/device.types';
import { State } from './initialState';

export const transformFolderDataToNode = (
  folderData: FolderData,
): DeviceNode[] => {
  const aux = Object.entries(folderData).map((entry) => {
    return {
      id: entry[0],
      label: entry[0],
      params: entry[1].Params ? entry[1].Params.ParData : [],
      children: entry[1].Folders
        ? transformFolderDataToNode(entry[1].Folders)
        : [],
    };
  });

  return aux;
};

export const deviceStructureReducer = (
  state: State,
  deviceStructure: DeviceStructure,
): State => {
  if (
    state.devices[deviceStructure.DeviceID] &&
    state.devices[deviceStructure.DeviceID].info
  ) {
    const structure = Object.entries(deviceStructure.FolderData).reduce(
      (_, current) => {
        return {
          id: current[0],
          label: current[0],
          params: current[1].Params ? current[1].Params.ParData : [],
          children: transformFolderDataToNode(current[1].Folders),
        };
      },
      { id: '', label: '', params: [], children: [] } as DeviceNode,
    );

    state.devices[deviceStructure.DeviceID].info.Status = 1;
    state.devices[deviceStructure.DeviceID].structure = structure;
  }

  return { ...state };
};
