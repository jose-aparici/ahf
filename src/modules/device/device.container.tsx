import React, { useContext } from 'react';
import { AhfContext } from 'store/context';

import { FolderParams } from 'domain/folder/folder.types';

import { AhfFoldersContainer } from './folders/folders.container';

interface Props {
  deviceId: string;
}

export const AhfDeviceContainer: React.FC<Props> = ({ deviceId }: Props) => {
  const { state } = useContext(AhfContext);

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
        />
      )}
    </>
  );
};
