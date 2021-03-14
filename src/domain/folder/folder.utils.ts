import { DeviceNode } from 'domain/device/device.types';
import { FolderNode } from 'domain/folder-node/folder-node.types';

export const findFolderIndexByName = (
  folderNames: string[],
  name: string,
): number => {
  const indexFound = folderNames.findIndex((folderName) => folderName === name);
  return indexFound >= 0 ? indexFound : 0;
};

export const findFolderById = (
  folderPath: string,
  rootNode: DeviceNode,
): DeviceNode | undefined => {
  debugger;
  if (rootNode.id === folderPath) {
    return rootNode;
  } else {
    if (((rootNode as unknown) as FolderNode).hasChildren()) {
      const nodeFound = rootNode.children.find((node) => {
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
