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

/* export type FolderApi = {
  contains: (source: Folder, node: Folder) => boolean;
  getChildAt: (source: Folder, index: number) => Folder | undefined;
  getChildren: (source: Folder) => Folder[];
  getFirstChild: (source: Folder) => Folder | undefined;
  getLastChild: (source: Folder) => Folder | undefined;
  getNextSibling: (source: Folder) => Folder | undefined;
  getParent: (source: Folder) => Folder | undefined;
  getPreviousSibling: (source: Folder) => Folder | undefined;
  hasChildren: (source: Folder) => boolean;
  isLastChild: (source: Folder) => boolean;
}; */
