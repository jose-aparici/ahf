import { AhfDeviceStructure } from 'domain/ahf-device/ahf-device.types';
import { transformFolderDataToFolders } from 'domain/ahf-folder-data/ahf-folder-data.utils';
import { transformAhfParamsToParam } from 'domain/ahf-param/ahf-param.utils';
import { DevicePaths } from 'domain/device/device.types';
import { Folder } from 'domain/folder/folder.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { AppRoutes } from 'pages/App.routes';

export const transformDeviceStructureToFolder = (
  structure: AhfDeviceStructure,
  paths: DevicePaths,
): Folder => {
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
        children: transformFolderDataToFolders(
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
