import { Folder } from './folder.types';

// TODO remove this
export const findFolderIndexByName = (
  folderNames: string[],
  name: string,
): number => {
  const indexFound = folderNames.findIndex((folderName) => folderName === name);
  return indexFound >= 0 ? indexFound : 0;
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
