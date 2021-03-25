import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

interface ParamTypes {
  deviceId: string;
  folderName: string;
}

export const AhfFoldersPage: React.FC = () => {
  const { state } = useContext(AhfContext);
  const { deviceId, folderName } = useParams<ParamTypes>();

  return (
    <div>wip</div>
    /*  <AhFPage>
      <>
        {state?.devices[+deviceId]?.structure && (
          <AhfFoldersContainer
            deviceId={state.devices[+deviceId].structure.DeviceID}
            folderName={folderName}
            folders={
              state.devices[+deviceId].structure.FolderData as Record<
                string,
                FolderParams
              >
            }
          />
        )}
      </>
    </AhFPage> */
  );
};
