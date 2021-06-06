import { flatten } from 'flattree';

import { AhfDeviceStructure } from 'domain/ahf-device/ahf-device.types';
import { AhfFolderData } from 'domain/ahf-folder/ahf-folder.types';
import { AhfParam, AhfParamType } from 'domain/ahf-param/ahf-param.types';
import { Folder } from 'domain/folder/folder.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { Param, ParamType } from 'domain/param/param.types';

import { DevicePaths } from '../../domain/device/device.types';
import { AppRoutes } from '../../pages/App.routes';
import { State } from './initialState';

const transformAhfParamTypeToParamType = (
  ahfParamType: AhfParamType,
  ahfParamId: number,
  enumCount: number,
): ParamType => {
  if (enumCount > 0) {
    return ParamType.ENUM;
  }

  if (ahfParamId === 240 || ahfParamId === 242 || ahfParamId === 243) {
    return ParamType.IP;
  }

  if (ahfParamId === 8) {
    return ParamType.MAC;
  }

  switch (ahfParamType) {
    case 'SignedInteger_8':
    case 'SignedInteger_16':
    case 'SignedInteger_32':
      return ParamType.SIGNED_INTEGER;
    case 'UnsignedInteger_8':
    case 'UnsignedInteger_16':
    case 'UnsignedInteger_32':
      return ParamType.UNSIGNED_INTEGER;
    case 'SinglePrecisionFloatingPoint':
      return ParamType.FLOATING_POINT;
    case 'VisibleString':
      return ParamType.STRING;
    case 'Date':
      return ParamType.DATE;
    default:
      return ParamType.STRING;
  }
};

const transformAhfParamsToParam = (
  ahfParams: AhfParam[],
  paths: DevicePaths,
  pathId: string,
): Param[] => {
  return ahfParams.map((ahfParam) => {
    paths[`${pathId}/${ahfParam.ParamID}`] = ahfParam.Name;
    return ({
      accessType: ahfParam.AccessType,
      description: ahfParam.Description,
      name: ahfParam.Name,
      paramEnumNumb: ahfParam.ParamEnumNumb,
      paramEnumText: ahfParam.ParamEnumText,
      paramId: ahfParam.ParamID,
      paramType: transformAhfParamTypeToParamType(
        ahfParam.ParamType,
        ahfParam.ParamID,
        ahfParam.ParamEnumNumb,
      ),
      unit: ahfParam.Unit,
      value: ahfParam.Value,
    } as unknown) as Param;
  });
};

const transformFolderDataToNode = (
  folderData: AhfFolderData,
  previousPath: string,
  deviceId: string,
  paths: DevicePaths,
): Folder[] => {
  return Object.entries(folderData).map((entry) => {
    const id =
      entry[0] === '' ? `${previousPath}/ ` : `${previousPath}/${entry[0]}`;
    const label = entry[1].Names;
    paths[id] = label;
    return {
      id: id,
      label: label,
      deviceId: deviceId,
      isMainFolder: false,
      params: entry[1].Params
        ? transformAhfParamsToParam(entry[1].Params.ParData, paths, id)
        : [],
      children: entry[1].Folders
        ? transformFolderDataToNode(
            entry[1].Folders,
            `${previousPath}/${entry[0]}`,
            deviceId,
            paths,
          )
        : [],
    };
  });
};

const transformStructureToFolder = (
  structure: AhfDeviceStructure,
  paths: DevicePaths,
) => {
  return Object.entries(structure.FolderData).reduce(
    (_, current) => {
      const id = `${AppRoutes.DevicesPage}/${structure.DeviceID.toString()}/${
        current[0]
      }`;
      const label = new Array(AHF_LANGUAGES.length).fill(current[0]);
      paths[id] = label;
      return {
        id: id,
        label: label,
        deviceId: structure.DeviceID.toString(),
        isMainFolder: true,
        params: current[1].Params
          ? transformAhfParamsToParam(current[1].Params.ParData, paths, id)
          : [],
        children: transformFolderDataToNode(
          current[1].Folders,
          `${AppRoutes.DevicesPage}/${structure.DeviceID.toString()}/${
            current[0]
          }`,
          structure.DeviceID.toString(),
          paths,
        ),
      };
    },
    {
      id: '',
      label: [],
      params: [],
      children: [],
      deviceId: '',
      isMainFolder: true,
    } as Folder,
  );
};

const hasInitalDevice = (state: State): boolean => {
  if (state.initialDevice >= 0) {
    return true;
  }
  const exists = Object.entries(state.devices).find(
    (device) => device[1].structure.id !== undefined,
  );

  return exists === undefined ? false : true;
};

export const deviceStructureReducer = (
  state: State,
  deviceStructure: AhfDeviceStructure,
): State => {
  if (!hasInitalDevice(state)) {
    state.initialDevice = deviceStructure.DeviceID;
  }

  if (
    state.devices[deviceStructure.DeviceID] &&
    state.devices[deviceStructure.DeviceID].info
  ) {
    state.devices[deviceStructure.DeviceID].paths = {};
    state.devices[deviceStructure.DeviceID].structure = flatten(
      transformStructureToFolder(
        deviceStructure,
        state.devices[deviceStructure.DeviceID].paths,
      ),
    )[0];
  }

  return { ...state };
};
