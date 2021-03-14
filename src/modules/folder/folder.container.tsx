import React, { useContext, useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { Folder } from 'domain/device/device.types';
import { findFolderById } from 'domain/folder/folder.utils';

interface ParamTypes {
  deviceId: string;
}

export const AhfFolderContainer: React.FC = () => {
  const { state } = useContext(AhfContext);
  const { deviceId } = useParams<ParamTypes>();
  const [currentFolder, setCurrentFolder] = useState<Folder>();
  const { url } = useRouteMatch();

  useEffect(() => {
    if (state?.devices[+deviceId]?.structure) {
      const folder = findFolderById(url, state.devices[+deviceId].structure);
      folder && setCurrentFolder(folder);
    }
  }, [deviceId, state, url]);

  return <div>this is a folder container {currentFolder?.id}</div>;
};
