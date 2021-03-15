import { Folder } from 'domain/folder/folder.types';

import { FolderNode } from './folder-navigation.types';

const convertToFolderNode = (folder: Folder) =>
  (folder as unknown) as FolderNode;

export const contains = (source: Folder, node: Folder): boolean => {
  const folderNode = convertToFolderNode(source);
  return folderNode.contains(node);
};

export const getChildAt = (
  source: Folder,
  index: number,
): Folder | undefined => {
  const folderNode = convertToFolderNode(source);
  const childAt = folderNode.getChildAt(index);
  return childAt ? childAt : undefined;
};

export const getChildren = (source: Folder): Folder[] => {
  const folderNode = convertToFolderNode(source);
  return folderNode.getChildren();
};

export const getFirstChild = (source: Folder): Folder | undefined => {
  const folderNode = convertToFolderNode(source);
  const firstChild = folderNode.getFirstChild();
  return firstChild ? firstChild : undefined;
};

export const getLastChild = (source: Folder): Folder | undefined => {
  const folderNode = convertToFolderNode(source);
  const lastChild = folderNode.getLastChild();
  return lastChild ? lastChild : undefined;
};

export const getNextSibling = (source: Folder): Folder | undefined => {
  const folderNode = convertToFolderNode(source);
  const nextSibling = folderNode.getNextSibling();
  return nextSibling ? nextSibling : undefined;
};

export const getParent = (source: Folder): Folder | undefined => {
  const folderNode = convertToFolderNode(source);
  const parent = folderNode.getParent();
  return parent ? parent : undefined;
};

export const getPreviousSibling = (source: Folder): Folder | undefined => {
  const folderNode = convertToFolderNode(source);
  const previousSibling = folderNode.getPreviousSibling();
  return previousSibling ? previousSibling : undefined;
};

export const hasChildren = (source: Folder): boolean => {
  const folderNode = convertToFolderNode(source);
  return folderNode.hasChildren();
};

export const isLastChild = (source: Folder): boolean => {
  const folderNode = convertToFolderNode(source);
  return folderNode.isLastChild();
};
