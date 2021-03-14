import { FolderNode } from 'domain/folder-node/folder-node.types';

import { Folder } from './folder.types';

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
  debugger;
  if (rootFolder.id === folderPath) {
    return rootFolder;
  } else {
    if (((rootFolder as unknown) as FolderNode).hasChildren()) {
      const nodeFound = rootFolder.children.find((node) => {
        debugger;
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
