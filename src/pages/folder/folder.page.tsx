import React, { useContext, useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { Folder } from 'domain/folder/folder.types';
import { findFolderById } from 'domain/folder/folder.utils';
import { AhfFolderContainer } from 'modules/folder/folder.container';
import {
  AhfFolderContext,
  AhfFolderProvider,
} from 'modules/folder/store/context';
import { AhfPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
}
export const AhfFolderPage: React.FC = () => {
  const { url } = useRouteMatch();
  const { state } = useContext(AhfContext);
  const { deviceId } = useParams<ParamTypes>();
  const [currentFolder, setCurrentFolder] = useState<Folder>();
  const { dispatch } = useContext(AhfFolderContext);

  useEffect(() => {
    if (state?.devices[+deviceId]?.structure) {
      const folder = findFolderById(url, state.devices[+deviceId].structure);
      if (folder) {
        setCurrentFolder(folder);
      }
    }
  }, [deviceId, state, url, dispatch]);

  return (
    <AhfPage>
      <AhfFolderProvider>
        {currentFolder && <AhfFolderContainer folder={currentFolder} />}
      </AhfFolderProvider>
    </AhfPage>
  );
};
