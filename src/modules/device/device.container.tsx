import React, { useContext } from 'react';
import { AhfContext } from 'store/context';

import { FolderParams } from 'domain/folder/folder.types';

import { AhfFoldersContainer } from './folders/folders.container';

interface Props {
  deviceId: string;
  folderIndex?: number;
}

export const AhfDeviceContainer: React.FC<Props> = ({
  deviceId,
  folderIndex = 0,
}: Props) => {
  const { state } = useContext(AhfContext);

  debugger;

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
          folderIndex={folderIndex}
        />
      )}
    </>
  );
};
