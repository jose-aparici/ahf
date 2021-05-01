import { useCallback } from 'react';

import {
  getFirstChild,
  getLastChild,
  getNextSibling,
  getParent,
  getPreviousSibling,
  hasChildren,
  isLastChild,
} from 'domain/folder-navigation/folder-navigation.utils';
import { Folder } from 'domain/folder/folder.types';

type FolderNavigationHook = {
  getNext: (folder: Folder) => Folder | undefined;
  getPrevious: (folder: Folder) => Folder | undefined;
};

export const useFolderNavigation = (): FolderNavigationHook => {
  const findNext = useCallback((folder: Folder): Folder | undefined => {
    const parent = getParent(folder);
    if (parent) {
      const parentSibling = getNextSibling(parent);
      if (parentSibling) {
        return parentSibling;
      } else {
        findNext(parent);
      }
    }
  }, []);

  const getNext = useCallback(
    (folder: Folder): Folder | undefined => {
      if (hasChildren(folder)) {
        return getFirstChild(folder);
      } else {
        if (!isLastChild(folder)) {
          return getNextSibling(folder);
        } else {
          return findNext(folder);
        }
      }
    },
    [findNext],
  );

  const findPrevious = useCallback((folder: Folder): Folder | undefined => {
    const lastChild = getLastChild(folder);
    if (lastChild) {
      return findPrevious(lastChild);
    } else {
      return folder;
    }
  }, []);

  const getPrevious = useCallback(
    (folder: Folder): Folder | undefined => {
      const previous = getPreviousSibling(folder);
      if (previous) {
        return findPrevious(previous);
      } else {
        return getParent(folder);
      }
    },
    [findPrevious],
  );

  return {
    getNext,
    getPrevious,
  };
};
