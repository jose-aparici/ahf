import { useHistory } from 'react-router-dom';

import { Resource } from 'domain/resource/resource.type';

import { useFolderNavigation } from './folder/folder-navigation.hook';

type ResourceSwipeNavigationHook = {
  hasPrevious: (resource: Resource) => boolean;
  hasNext: (resource: Resource) => boolean;
  goNext: (resource: Resource) => void;
  goPrevious: (resource: Resource) => void;
};

export const useResourceSwipeNavigation = (): ResourceSwipeNavigationHook => {
  const folderNavigation = useFolderNavigation();
  const history = useHistory();

  const hasNext = (resource: Resource): boolean => {
    if (resource.currentParamIndex) {
      return false;
    } else {
      return folderNavigation.goNext(resource.folder) ? true : false;
    }
  };

  const goNext = (resource: Resource) => {
    if (resource.currentParamIndex) {
    } else {
      const nextFolder = folderNavigation.goNext(resource.folder);
      nextFolder &&
        history.push(history.location.pathname.replace(/[^]*$/, nextFolder.id));
    }
  };

  const goPrevious = (resource: Resource) => {
    if (resource.currentParamIndex) {
    } else {
      const nextFolder = folderNavigation.goPrevious(resource.folder);
      nextFolder &&
        history.push(history.location.pathname.replace(/[^]*$/, nextFolder.id));
    }
  };

  const hasPrevious = (resource: Resource): boolean => {
    if (resource.currentParamIndex) {
      return false;
    } else {
      return folderNavigation.goPrevious(resource.folder) ? true : false;
    }
  };

  return {
    hasNext,
    goNext,
    hasPrevious,
    goPrevious,
  };
};
