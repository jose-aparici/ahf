import { flatten } from 'flattree';

import { AhfDeviceStructure } from 'domain/ahf-device/ahf-device.types';
import { AhfFolderData } from 'domain/ahf-folder/ahf-folder.types';
import { AhfParam, AhfParamType } from 'domain/ahf-param/ahf-param.types';
import { Folder } from 'domain/folder/folder.types';
import { Param, ParamType } from 'domain/param/param.types';

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
        paramType: transformAhfParamTypeToParamType(
          ahfParam.ParamType,
          ahfParam.ParamID,
          ahfParam.ParamEnumNumb,
        ),
        unit: ahfParam.Unit,
        value: ahfParam.Value,
      } as unknown) as Param),
  );

const transformFolderDataToNode = (
  folderData: AhfFolderData,
  previousPath: string,
  deviceId: string,
): Folder[] => {
  return Object.entries(folderData).map((entry) => ({
    id: entry[0] === '' ? `${previousPath}/ ` : `${previousPath}/${entry[0]}`,
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
};

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

const hasInitalDevice = (state: State): boolean => {
  if (state.initialDevice >= 0) {
    return true;
  }
  const exists = Object.entries(state.devices).find(
    (device) => device[1].structure !== undefined,
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
    state.devices[deviceStructure.DeviceID].info.status = 1;
    state.devices[deviceStructure.DeviceID].structure = flatten(
      transformStructureToNode(deviceStructure),
    )[0];
  }

  return { ...state };
};
