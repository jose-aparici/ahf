import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { FolderParams } from 'domain/folder/folder.types';
import { AhfFoldersContainer } from 'modules/folders/folders.container';
import { AhFPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
  folderId: string;
}

export const AhfFoldersPage: React.FC = () => {
  const { state } = useContext(AhfContext);
  const { deviceId, folderId } = useParams<ParamTypes>();

  return (
    <AhFPage>
      <>
        {state?.devices[+deviceId]?.structure && (
          <AhfFoldersContainer
            deviceId={state.devices[+deviceId].structure.DeviceID}
            folderId={+folderId}
            folders={
              state.devices[+deviceId].structure.FolderData as Record<
                string,
                FolderParams
              >
            }
          />
        )}
      </>
    </AhFPage>
  );
};
