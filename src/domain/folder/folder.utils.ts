import { Param } from '../param/param.types';
import { Folder } from './folder.types';

export const getIdsWithChildren = (
  folder: Folder,
  folderIds: string[],
): string[] => {
  if (folder.children && folder.children.length > 0) {
    folderIds.push(folder.id);
    folder.children.forEach((child) => {
      getIdsWithChildren(child, folderIds);
    });
    return folderIds;
  } else {
    return [];
  }
};

export const findFolderById = (
  rootFolder: Folder,
  id: string,
): Folder | undefined => {
  if (rootFolder.id === id) {
    return rootFolder;
  } else {
    return rootFolder.children.length > 0
      ? rootFolder.children.find((folder) => {
          return findFolderById(folder, id);
        })
      : undefined;
  }
};

export const getParamsFromFolder = (
  folder: Folder,
  params: Param[],
): Param[] | undefined => {
  params.push(...folder.params);
  if (folder.children.length > 0) {
    folder.children.forEach((folder) => {
      getParamsFromFolder(folder, params);
    });
    return params;
  } else {
    return params;
  }
};
