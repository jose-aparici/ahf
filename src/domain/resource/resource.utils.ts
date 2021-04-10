import { FolderNode } from 'domain/folder-navigation/folder-navigation.types';
import { Folder } from 'domain/folder/folder.types';

import { Resource } from './resource.type';

export const findResourceByPath = (
  folderPath: string,
  rootFolder: Folder,
): Resource | undefined => {
  if (rootFolder.id === folderPath) {
    return { folder: rootFolder, currentParamIndex: undefined };
  } else {
    const paramId = folderPath.substring(folderPath.lastIndexOf('/') + 1);

    if (
      ((rootFolder as unknown) as FolderNode).hasChildren() ||
      rootFolder.params.length > 0
    ) {
      const currentParamIndex = rootFolder.params.findIndex(
        (param) => param.paramId === +paramId,
      );

      const folder = rootFolder.children.find((node) =>
        folderPath.startsWith(node.id),
      );

      if (currentParamIndex < 0 && !folder) {
        return undefined;
      } else {
        if (currentParamIndex >= 0) {
          return { folder: rootFolder, currentParamIndex };
        }

        if (folder) {
          return folder.id === folderPath
            ? { folder, currentParamIndex: undefined }
            : findResourceByPath(folderPath, folder);
        }
      }
    } else {
      const currentParamIndex = rootFolder.params.findIndex(
        (param) => param.paramId === +paramId,
      );
      return { folder: rootFolder, currentParamIndex };
    }
  }
};

export const isFolder = (folder: Folder): boolean => folder.id !== undefined;
