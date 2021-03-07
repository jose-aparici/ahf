import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

interface ParamTypes {
  deviceId: string;
  folderName: string;
  paramId: string;
}

export const AhfParamsPage: React.FC = () => {
  const { state } = useContext(AhfContext);

  const { deviceId, folderName, paramId } = useParams<ParamTypes>();

  return (
    <div>wip</div>
    /*  <AhFPage>
      <>
        {state?.devices[+deviceId]?.structure?.FolderData && (
          <AhfParamsContainer
            deviceId={deviceId}
            folderName={folderName}
            paramId={paramId}
            params={
              state.devices[+deviceId].structure.FolderData[folderName].ParData
            }
          />
        )}
      </>
    </AhFPage> */
  );
};
