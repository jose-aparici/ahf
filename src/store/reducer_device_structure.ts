import {
  DeviceStructureAhf,
  FolderData,
} from 'domain/ahf-device/ahf-device.types';

import { DeviceNode } from '../domain/device/device.types';
import { State } from './initialState';

const transformFolderDataToNode = (folderData: FolderData): DeviceNode[] =>
  Object.entries(folderData).map((entry) => ({
    id: Date.now().toString() + Math.random(),
    label: entry[0],
    params: entry[1].Params ? entry[1].Params.ParData : [],
    root: false,
    children: entry[1].Folders
      ? transformFolderDataToNode(entry[1].Folders)
      : [],
  }));

const transformStructureToNode = (structure: DeviceStructureAhf) =>
  Object.entries(structure.FolderData).reduce(
    (_, current) => ({
      id: Date.now().toString() + Math.random(),
      label: current[0],
      params: current[1].Params ? current[1].Params.ParData : [],
      root: true,
      children: transformFolderDataToNode(current[1].Folders),
    }),
    {
      id: Date.now().toString() + Math.random(),
      label: '',
      params: [],
      children: [],
      root: true,
    } as DeviceNode,
  );

export const deviceStructureReducer = (
  state: State,
  deviceStructure: DeviceStructureAhf,
): State => {
  if (
    state.devices[deviceStructure.DeviceID] &&
    state.devices[deviceStructure.DeviceID].info
  ) {
    state.devices[deviceStructure.DeviceID].info.status = 1;
    state.devices[
      deviceStructure.DeviceID
    ].structure = transformStructureToNode(deviceStructure);
  }

  return { ...state };
};
