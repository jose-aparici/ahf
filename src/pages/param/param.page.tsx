import React from 'react';
import { useParams } from 'react-router-dom';

import { AhfParamContainer } from 'modules/param/param.container';
import { AhFPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
  folderId: string;
  paramId: string;
}

export const AhfParamPage: React.FC = () => {
  const { deviceId, folderId, paramId } = useParams<ParamTypes>();

  return (
    <AhFPage>
      <AhfParamContainer
        deviceId={deviceId}
        folderId={folderId}
        paramId={paramId}
      />
    </AhFPage>
  );
};
