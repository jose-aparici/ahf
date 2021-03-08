import { DeviceStructure, FolderData } from 'domain/device/device.types';

import { DeviceNode } from '../domain/device/device.types';
import { State } from './initialState';

const transformFolderDataToNode = (folderData: FolderData): DeviceNode[] =>
  Object.entries(folderData).map((entry) => ({
    id: entry[0],
    label: entry[0],
    params: entry[1].Params ? entry[1].Params.ParData : [],
    children: entry[1].Folders
      ? transformFolderDataToNode(entry[1].Folders)
      : [],
  }));

const transformStructureToNode = (structure: DeviceStructure) =>
  Object.entries(structure.FolderData).reduce(
    (_, current) => ({
      id: current[0],
      label: current[0],
      params: current[1].Params ? current[1].Params.ParData : [],
      children: transformFolderDataToNode(current[1].Folders),
    }),
    { id: '', label: '', params: [], children: [] } as DeviceNode,
  );

export const deviceStructureReducer = (
  state: State,
  deviceStructure: DeviceStructure,
): State => {
  if (
    state.devices[deviceStructure.DeviceID] &&
    state.devices[deviceStructure.DeviceID].info
  ) {
    state.devices[deviceStructure.DeviceID].info.Status = 1;
    state.devices[
      deviceStructure.DeviceID
    ].structure = transformStructureToNode(deviceStructure);
  }

  return { ...state };
};
