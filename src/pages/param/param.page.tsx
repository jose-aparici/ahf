import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { AhfParamContainer } from 'modules/param/param.container';
import { AhFPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
  folderId: string;
  paramId: string;
}

export const AhfParamPage: React.FC = () => {
  const { state } = useContext(AhfContext);

  const { deviceId, folderId, paramId } = useParams<ParamTypes>();

  return (
    <AhFPage>
      <>
        {state?.devices[+deviceId]?.structure?.FolderData && (
          <AhfParamContainer
            deviceId={deviceId}
            folderId={folderId}
            paramId={paramId}
          />
        )}
      </>
    </AhFPage>
  );
};
