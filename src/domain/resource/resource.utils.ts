import { Folder } from 'domain/folder/folder.types';

import { Resource } from './resource.type';

export const findResourceByPath = (
  folderPath: string,
  rootFolder: Folder,
): Resource | undefined => {
  if (rootFolder.id === folderPath) {
    return { folder: rootFolder, currentParamIndex: undefined };
  } else {
    const nextFolder = rootFolder.children.find((node) =>
      folderPath.startsWith(node.id),
    );
    if (nextFolder) {
      return findResourceByPath(folderPath, nextFolder);
    } else {
      const paramId = folderPath.substring(folderPath.lastIndexOf('/') + 1);
      if (rootFolder.params.length > 0) {
        const currentParamIndex = rootFolder.params.findIndex(
          (param) => param.paramId === +paramId,
        );
        if (currentParamIndex >= 0) {
          return { folder: rootFolder, currentParamIndex };
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    }
  }
};

export const isFolder = (folder: Folder): boolean => folder.id !== undefined;
