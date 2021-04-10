import React, { useContext, useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { Resource } from 'domain/resource/resource.type';
import { findResourceByPath } from 'domain/resource/resource.utils';
import { AhfResourceContainer } from 'modules/resource/resource.container';
import { AhfResourceProvider } from 'modules/resource/store/context';
import { AhfPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
}
export const AhfResourcePage: React.FC = () => {
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
      <AhfResourceProvider>
        {currentResource && <AhfResourceContainer resource={currentResource} />}
      </AhfResourceProvider>
    </AhfPage>
  );
};
