import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Resource } from 'domain/resource/resource.type';

import { useFolderNavigation } from './folder/folder-navigation.hook';

type ResourceSwipeNavigationHook = {
  hasPreviousResource: (resource: Resource) => boolean;
  hasNextResource: (resource: Resource) => boolean;
  goNextResource: (resource: Resource) => void;
  goPreviousResource: (resource: Resource) => void;
};

export const useResourceSwipeNavigation = (): ResourceSwipeNavigationHook => {
  const folderNavigation = useFolderNavigation();
  /* const folder = resource?.folder;
  const param =
    resource?.folder &&
    resource.currentParamIndex &&
    resource.folder.params[resource.currentParamIndex];
  const paramNavigation = useParamNavigation(); */

  const history = useHistory();

  const hasNextResource = useCallback(
    (currentResource: Resource): boolean => {
      if (currentResource.currentParamIndex) {
        return false;
      } else {
        return folderNavigation.getNext(currentResource.folder) ? true : false;
      }
    },
    [folderNavigation],
  );

  const goNextResource = useCallback(
    (currentResource: Resource) => {
      if (currentResource.currentParamIndex) {
        return;
      } else {
        const nextFolder = folderNavigation.getNext(currentResource.folder);
        nextFolder &&
          history.push(
            history.location.pathname.replace(/[^]*$/, nextFolder.id),
          );
      }
    },
    [folderNavigation, history],
  );

  const goPreviousResource = useCallback(
    (currentResource: Resource) => {
      if (currentResource.currentParamIndex) {
      } else {
        const nextFolder = folderNavigation.getPrevious(currentResource.folder);
        nextFolder &&
          history.push(
            history.location.pathname.replace(/[^]*$/, nextFolder.id),
          );
      }
    },
    [folderNavigation, history],
  );

  const hasPreviousResource = useCallback(
    (currentResource: Resource): boolean => {
      if (currentResource.currentParamIndex) {
        return false;
      } else {
        return folderNavigation.getPrevious(currentResource.folder)
          ? true
          : false;
      }
    },
    [folderNavigation],
  );

  return {
    hasNextResource,
    goNextResource,
    hasPreviousResource,
    goPreviousResource,
  };
};
