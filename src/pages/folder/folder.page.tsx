import React, { useContext, useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { Folder } from 'domain/folder/folder.types';
import { Param } from 'domain/param/param.types';
import { Resource } from 'domain/resource/resource.type';
import {
  findResourceByPath,
  isFolder,
  isParam,
} from 'domain/resource/resource.utils';
import { AhfFolderContainer } from 'modules/folder/folder.container';
import {
  AhfFolderContext,
  AhfFolderProvider,
} from 'modules/folder/store/context';
import { AhfParamContainer } from 'modules/param/param.container';
import { AhfPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
}
export const AhfFolderPage: React.FC = () => {
  const { url } = useRouteMatch();
  const { state } = useContext(AhfContext);
  const { deviceId } = useParams<ParamTypes>();

  const [currentResource, setCurrentResource] = useState<Resource>();
  const { dispatch } = useContext(AhfFolderContext);

  useEffect(() => {
    if (state?.devices[+deviceId]?.structure) {
      const resource = findResourceByPath(
        url,
        state.devices[+deviceId].structure,
      );

      if (resource) {
        setCurrentResource(resource);
      }
    }
  }, [deviceId, state, url, dispatch]);

  return (
    <AhfPage>
      <AhfFolderProvider>
        {currentResource && isFolder(currentResource) && (
          <AhfFolderContainer folder={currentResource as Folder} />
        )}
        {currentResource && isParam(currentResource) && (
          <AhfParamContainer param={currentResource as Param} />
        )}
      </AhfFolderProvider>
    </AhfPage>
  );
};
