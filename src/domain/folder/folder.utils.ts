import { FolderNode } from 'domain/folder-navigation/folder-navigation.types';

import { Folder } from './folder.types';

// TODO remove this
export const findFolderIndexByName = (
  folderNames: string[],
  name: string,
): number => {
  const indexFound = folderNames.findIndex((folderName) => folderName === name);
  return indexFound >= 0 ? indexFound : 0;
};

export const findFolderById = (
  folderPath: string,
  rootFolder: Folder,
): Folder | undefined => {
  if (rootFolder.id === folderPath) {
    return rootFolder;
  } else {
    if (((rootFolder as unknown) as FolderNode).hasChildren()) {
      const nodeFound = rootFolder.children.find((node) => {
        return folderPath.startsWith(node.id);
      });

      return !nodeFound
        ? undefined
        : nodeFound.id === folderPath
        ? nodeFound
        : findFolderById(folderPath, nodeFound);
    } else {
      return undefined;
    }
  }
};

export const getIdsWithChildren = (
  folder: Folder,
  folderIds: string[],
): string[] => {
  if (folder.children.length > 0) {
    folderIds.push(folder.id);
    folder.children.forEach((child) => {
      getIdsWithChildren(child, folderIds);
    });
    return folderIds;
  } else {
    return [];
  }
};
