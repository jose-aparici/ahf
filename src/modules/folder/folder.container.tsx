import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { Folder } from 'domain/folder/folder.types';
import { findFolderById } from 'domain/folder/folder.utils';

import { useFolderNavigation } from './folder-navigation.hook';

interface ParamTypes {
  deviceId: string;
}

export const AhfFolderContainer: React.FC = () => {
  const { state } = useContext(AhfContext);
  const { deviceId } = useParams<ParamTypes>();
  const [currentFolder, setCurrentFolder] = useState<Folder>();
  const { url } = useRouteMatch();
  const history = useHistory();

  const { goNext, goPrevious } = useFolderNavigation();

  useEffect(() => {
    if (state?.devices[+deviceId]?.structure) {
      const folder = findFolderById(url, state.devices[+deviceId].structure);
      folder && setCurrentFolder(folder);
    }
  }, [deviceId, state, url]);

  const handleNext = () => {
    const nextFolder = currentFolder && goNext(currentFolder);
    nextFolder?.id && handleFolderChange(nextFolder);
  };

  const handlePrevious = () => {
    const previousFolder = currentFolder && goPrevious(currentFolder);
    previousFolder?.id && handleFolderChange(previousFolder);
  };

  const handleFolderChange = (folder: Folder) => {
    setCurrentFolder(folder);
    history.replace(history.location.pathname.replace(/[^]*$/, folder.id));
  };

  return (
    <>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <div>this is a folder container {currentFolder?.id}</div>
    </>
  );
};
