import { Folder } from 'domain/folder/folder.types';

export type FolderNode = {
  contains: (node: Folder) => boolean;
  getChildAt: (index: number) => Folder | null;
  getChildren: () => Folder[];
  getFirstChild: () => Folder | null;
  getLastChild: () => Folder | null;
  getNextSibling: () => Folder | null;
  getParent: () => Folder | null;
  getPreviousSibling: () => Folder | null;
  hasChildren: () => boolean;
  isLastChild: () => boolean;
};
