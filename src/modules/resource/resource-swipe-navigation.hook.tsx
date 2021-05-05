import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Resource } from 'domain/resource/resource.type';

import { useFolderNavigation } from './folder/folder-navigation.hook';
import { useParamNavigation } from './param-detail/param-navigation.hook';

type ResourceSwipeNavigationHook = {
  hasPreviousResource: (resource: Resource) => boolean;
  hasNextResource: (resource: Resource) => boolean;
  goNextResource: (resource: Resource) => void;
  goPreviousResource: (resource: Resource) => void;
};

export const useResourceSwipeNavigation = (): ResourceSwipeNavigationHook => {
  const folderNavigation = useFolderNavigation();
  const paramNavigation = useParamNavigation();
  const history = useHistory();

  const hasNextResource = useCallback(
    (currentResource: Resource): boolean => {
      if (currentResource.currentParamIndex !== undefined) {
        return paramNavigation.hasNext(
          currentResource.folder,
          currentResource.folder.params[currentResource.currentParamIndex],
        );
      } else {
        return folderNavigation.getNext(currentResource.folder) ? true : false;
      }
    },
    [folderNavigation, paramNavigation],
  );

  const goNextResource = useCallback(
    (currentResource: Resource) => {
      if (currentResource.currentParamIndex !== undefined) {
        const nextParamId = paramNavigation.getNextParamId(
          currentResource.folder,
          currentResource.folder.params[currentResource.currentParamIndex],
        );
        nextParamId &&
          history.push(
            history.location.pathname.replace(/[^]*$/, nextParamId.toString()),
          );
      } else {
        const nextFolder = folderNavigation.getNext(currentResource.folder);
        nextFolder &&
          history.push(
            history.location.pathname.replace(/[^]*$/, nextFolder.id),
          );
      }
    },
    [folderNavigation, history, paramNavigation],
  );

  const goPreviousResource = useCallback(
    (currentResource: Resource) => {
      if (currentResource.currentParamIndex !== undefined) {
        const previousParamId = paramNavigation.getPreviousParamId(
          currentResource.folder,
          currentResource.folder.params[currentResource.currentParamIndex],
        );
        previousParamId &&
          history.push(
            history.location.pathname.replace(
              /[^]*$/,
              previousParamId.toString(),
            ),
          );
      } else {
        const nextFolder = folderNavigation.getPrevious(currentResource.folder);
        nextFolder &&
          history.push(
            history.location.pathname.replace(/[^]*$/, nextFolder.id),
          );
      }
    },
    [folderNavigation, paramNavigation, history],
  );

  const hasPreviousResource = useCallback(
    (currentResource: Resource): boolean => {
      if (currentResource.currentParamIndex !== undefined) {
        return paramNavigation.hasPrevious(
          currentResource.folder.params[currentResource.currentParamIndex],
        );
      } else {
        return folderNavigation.getPrevious(currentResource.folder)
          ? true
          : false;
      }
    },
    [folderNavigation, paramNavigation],
  );

  return {
    hasNextResource,
    goNextResource,
    hasPreviousResource,
    goPreviousResource,
  };
};
