import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { Folder } from 'domain/folder/folder.types';
import { Param } from 'domain/param/param.types';

type FolderNavigationHook = {
  hasNext: boolean;
  hasPrevious: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
};

export const useParamNavigation = (
  folder: Folder,
  param: Param,
): FolderNavigationHook => {
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setHasNext(
      param.read !== undefined
        ? folder.params.length > param.read.paramPos + 1
        : false,
    );
    setHasPrevious(
      param.read !== undefined ? param.read.paramPos - 1 >= 0 : false,
    );
  }, [folder.params.length, param.read]);

  const handleFolderChange = (paramId: number) => {
    history.push(
      history.location.pathname.replace(/[^]*$/, paramId.toString()),
    );
  };

  const handleNext = () => {
    param.read !== undefined &&
      handleFolderChange(folder.params[param.read.paramPos + 1].paramId);
  };

  const handlePrevious = () => {
    param.read !== undefined &&
      handleFolderChange(folder.params[param.read.paramPos - 1].paramId);
  };

  return {
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
  };
};
