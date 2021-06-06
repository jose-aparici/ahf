import { AhfFolderData } from 'domain/ahf-folder/ahf-folder.types';
import { transformAhfParamsToParam } from 'domain/ahf-param/ahf-param.utils';
import { DevicePaths } from 'domain/device/device.types';
import { Folder } from 'domain/folder/folder.types';

export const transformFolderDataToFolders = (
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
        ? transformFolderDataToFolders(
            entry[1].Folders,
            `${previousPath}/${entry[0]}`,
            deviceId,
            paths,
          )
        : [],
    };
  });
};
