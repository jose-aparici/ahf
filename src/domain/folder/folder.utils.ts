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
