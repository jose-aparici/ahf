import { flatten } from 'flattree';

import {
  DeviceStructureAhf,
  FolderData,
} from 'domain/ahf-device/ahf-device.types';
import { Folder } from 'domain/folder/folder.types';

import { AppRoutes } from '../pages/App.routes';
import { State } from './initialState';

const transformFolderDataToNode = (
  folderData: FolderData,
  previousPath: string,
): Folder[] =>
  Object.entries(folderData).map((entry) => ({
    id: `${previousPath}/${entry[0]}`,
    label: entry[0],
    params: entry[1].Params ? entry[1].Params.ParData : [],
    children: entry[1].Folders
      ? transformFolderDataToNode(
          entry[1].Folders,
          `${previousPath}/${entry[0]}`,
        )
      : [],
  }));

const transformStructureToNode = (structure: DeviceStructureAhf) =>
  Object.entries(structure.FolderData).reduce(
    (_, current) => ({
      id: `${AppRoutes.DevicesPage}/${structure.DeviceID.toString()}`,
      label: current[0],
      params: current[1].Params ? current[1].Params.ParData : [],
      children: transformFolderDataToNode(
        current[1].Folders,
        `${AppRoutes.DevicesPage}/${structure.DeviceID.toString()}`,
      ),
    }),
    {
      id: '',
      label: '',
      params: [],
      children: [],
    } as Folder,
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
    state.devices[deviceStructure.DeviceID].structure = flatten(
      transformStructureToNode(deviceStructure),
    )[0];
  }

  return { ...state };
};
