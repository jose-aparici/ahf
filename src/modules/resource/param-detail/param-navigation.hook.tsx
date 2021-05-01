import { useCallback } from 'react';

import { Folder } from 'domain/folder/folder.types';
import { Param } from 'domain/param/param.types';

type FolderNavigationHook = {
  hasNext: (folder: Folder, param: Param) => boolean;
  hasPrevious: (param: Param) => boolean;
  getNextParamId: (folder: Folder, param: Param) => number;
  getPreviousParamId: (folder: Folder, param: Param) => number;
};

export const useParamNavigation = (): FolderNavigationHook => {
  const hasNext = useCallback((folder: Folder, param: Param): boolean => {
    return param.read !== undefined
      ? folder.params.length > param.read.paramPos + 1
      : false;
  }, []);

  const hasPrevious = useCallback((param: Param): boolean => {
    return param.read !== undefined ? param.read.paramPos - 1 >= 0 : false;
  }, []);

  const getNextParamId = useCallback((folder: Folder, param: Param) => {
    return param.read !== undefined
      ? folder.params[param.read.paramPos + 1].paramId
      : -1;
  }, []);

  const getPreviousParamId = useCallback((folder: Folder, param: Param) => {
    return param.read !== undefined
      ? folder.params[param.read.paramPos - 1].paramId
      : -1;
  }, []);

  return {
    hasNext,
    hasPrevious,
    getNextParamId,
    getPreviousParamId,
  };
};
