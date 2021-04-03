import { FolderNode } from 'domain/folder-navigation/folder-navigation.types';
import { Folder } from 'domain/folder/folder.types';
import { Param } from 'domain/param/param.types';

import { Resource } from './resource.type';

export const findResourceByPath = (
  folderPath: string,
  rootFolder: Folder,
): Resource | undefined => {
  if (rootFolder.id === folderPath) {
    return rootFolder;
  } else {
    const paramId = folderPath.substring(folderPath.lastIndexOf('/') + 1);

    if (
      ((rootFolder as unknown) as FolderNode).hasChildren() ||
      rootFolder.params.length > 0
    ) {
      const resourceFound =
        rootFolder.params.find((param) => param.paramId === +paramId) ||
        rootFolder.children.find((node) => folderPath.startsWith(node.id));

      if (!resourceFound) {
        return undefined;
      } else {
        if (
          isParam(resourceFound) ||
          (isFolder(resourceFound) &&
            (resourceFound as Folder).id === folderPath)
        ) {
          return resourceFound;
        } else {
          return findResourceByPath(folderPath, resourceFound as Folder);
        }
      }

      /*  return !nodeFound
        ? undefined
        : nodeFound.id === folderPath
        ? nodeFound
        : findResourceByPath(folderPath, nodeFound); */
    } else {
      return rootFolder.params.find((param) => param.paramId === +paramId);
    }
  }
};

export const isFolder = (resource: Resource): boolean =>
  (resource as Folder).id !== undefined;

export const isParam = (resource: Resource): boolean =>
  (resource as Param).paramId !== undefined;
