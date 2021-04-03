import { flatten } from 'flattree';

import { AhfDeviceStructure } from 'domain/ahf-device/ahf-device.types';
import { AhfFolderData } from 'domain/ahf-folder/ahf-folder.types';
import { AhfParam } from 'domain/ahf-param/ahf-param.types';
import { Folder } from 'domain/folder/folder.types';
import { Param } from 'domain/param/param.types';

import { AppRoutes } from '../pages/App.routes';
import { State } from './initialState';

const transformAhfParamsToParam = (ahfParams: AhfParam[]): Param[] =>
  ahfParams.map(
    (ahfParam) =>
      (({
        accessType: ahfParam.AccessType,
        description: ahfParam.Description,
        name: ahfParam.Name,
        paramEnumNumb: ahfParam.ParamEnumNumb,
        paramEnumText: ahfParam.ParamEnumText,
        paramId: ahfParam.ParamID,
        paramType: ahfParam.ParamType,
        unit: ahfParam.Unit,
        value: ahfParam.Value,
      } as unknown) as Param),
  );

const transformFolderDataToNode = (
  folderData: AhfFolderData,
  previousPath: string,
  deviceId: string,
): Folder[] =>
  Object.entries(folderData).map((entry) => ({
    id: `${previousPath}/${entry[0]}`,
    label: entry[0],
    deviceId: deviceId,
    isMainFolder: false,
    params: entry[1].Params
      ? transformAhfParamsToParam(entry[1].Params.ParData)
      : [],
    children: entry[1].Folders
      ? transformFolderDataToNode(
          entry[1].Folders,
          `${previousPath}/${entry[0]}`,
          deviceId,
        )
      : [],
  }));

const transformStructureToNode = (structure: AhfDeviceStructure) =>
  Object.entries(structure.FolderData).reduce(
    (_, current) => ({
      id: `${AppRoutes.DevicesPage}/${structure.DeviceID.toString()}/${
        current[0]
      }`,
      label: current[0],
      deviceId: structure.DeviceID.toString(),
      isMainFolder: true,
      params: current[1].Params
        ? transformAhfParamsToParam(current[1].Params.ParData)
        : [],
      children: transformFolderDataToNode(
        current[1].Folders,
        `${AppRoutes.DevicesPage}/${structure.DeviceID.toString()}/${
          current[0]
        }`,
        structure.DeviceID.toString(),
      ),
    }),
    {
      id: '',
      label: '',
      params: [],
      children: [],
      deviceId: '',
      isMainFolder: true,
    } as Folder,
  );

export const deviceStructureReducer = (
  state: State,
  deviceStructure: AhfDeviceStructure,
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
