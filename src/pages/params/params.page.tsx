import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { AhfParamsContainer } from 'modules/params/params.container';
import { AhFPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
  folderId: string;
  paramId: string;
}

export const AhfParamsPage: React.FC = () => {
  const { state } = useContext(AhfContext);

  const { deviceId, folderId, paramId } = useParams<ParamTypes>();

  return (
    <AhFPage>
      <>
        {state?.devices[+deviceId]?.structure?.FolderData && (
          <AhfParamsContainer
            deviceId={deviceId}
            folderId={folderId}
            paramId={paramId}
          />
        )}
      </>
    </AhFPage>
  );
};
