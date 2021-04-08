import React, { useContext, useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { Resource } from 'domain/resource/resource.type';
import { findResourceByPath } from 'domain/resource/resource.utils';
import { AhfResourceContainer } from 'modules/folder/resource.container';
import { AhfFolderProvider } from 'modules/folder/store/context';
import { AhfPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
}
export const AhfFolderPage: React.FC = () => {
  const { url } = useRouteMatch();
  const { state } = useContext(AhfContext);
  const { deviceId } = useParams<ParamTypes>();

  const [currentResource, setCurrentResource] = useState<Resource>();

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
  }, [deviceId, state, url]);

  return (
    <AhfPage>
      <AhfFolderProvider>
        {currentResource && <AhfResourceContainer resource={currentResource} />}
      </AhfFolderProvider>
    </AhfPage>
  );
};
