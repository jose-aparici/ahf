export type FolderNode = {
  contains: (node: FolderNode) => boolean;
  getChildAt: (index: number) => FolderNode | null;
  getChildren: () => FolderNode[];
  getFirstChild: () => FolderNode | null;
  getLastChild: () => FolderNode | null;
  getNextSibling: () => FolderNode | null;
  getParent: () => FolderNode | null;
  getPreviousSibling: () => FolderNode | null;
  hasChildren: () => boolean;
  isLastChild: () => boolean;
};
