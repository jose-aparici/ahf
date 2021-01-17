import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { FolderParams } from 'domain/folder/folder.types';

import { AhfFoldersContainer } from './folders/folders.container';

interface ParamTypes {
  deviceId: string;
}

export const AhfDeviceContainer: React.FC = () => {
  const { deviceId } = useParams<ParamTypes>();
  const location = useLocation();

  const { state } = useContext(AhfContext);
  const queryParams = new URLSearchParams(location.search);

  const sectionUri = queryParams.get('section');

  return (
    <>
      {state?.devices[+deviceId]?.structure && (
        <AhfFoldersContainer
          deviceId={state.devices[+deviceId].structure.DeviceID}
          folders={
            state.devices[+deviceId].structure.FolderData as Record<
              string,
              FolderParams
            >
          }
          folderIndex={0}
        />
      )}
    </>
  );
};
