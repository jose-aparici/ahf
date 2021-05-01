import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Resource } from 'domain/resource/resource.type';

import { useFolderNavigation } from './folder/folder-navigation.hook';

type ResourceSwipeNavigationHook = {
  hasPreviousResource: () => boolean;
  hasNextResource: () => boolean;
  goNextResource: () => void;
  goPreviousResource: () => void;
};

export const useResourceSwipeNavigation = (
  resource: Resource | undefined,
): ResourceSwipeNavigationHook => {
  const folderNavigation = useFolderNavigation();
  //const paramNavigation = useParamNavigation();

  const history = useHistory();

  const hasNextResource = useCallback((): boolean => {
    if (resource) {
      if (resource.currentParamIndex) {
        return false;
      } else {
        return folderNavigation.goNext(resource.folder) ? true : false;
      }
    } else {
      return false;
    }
  }, [folderNavigation, resource]);

  const goNextResource = useCallback(() => {
    if (resource) {
      if (resource.currentParamIndex) {
      } else {
        const nextFolder = folderNavigation.goNext(resource.folder);
        nextFolder &&
          history.push(
            history.location.pathname.replace(/[^]*$/, nextFolder.id),
          );
      }
    }
  }, [folderNavigation, history, resource]);

  const goPreviousResource = useCallback(() => {
    if (resource) {
      if (resource.currentParamIndex) {
      } else {
        const nextFolder = folderNavigation.goPrevious(resource.folder);
        nextFolder &&
          history.push(
            history.location.pathname.replace(/[^]*$/, nextFolder.id),
          );
      }
    }
  }, [folderNavigation, history, resource]);

  const hasPreviousResource = useCallback((): boolean => {
    if (resource) {
      if (resource.currentParamIndex) {
        return false;
      } else {
        return folderNavigation.goPrevious(resource.folder) ? true : false;
      }
    } else {
      return false;
    }
  }, [folderNavigation, resource]);

  return {
    hasNextResource,
    goNextResource,
    hasPreviousResource,
    goPreviousResource,
  };
};
