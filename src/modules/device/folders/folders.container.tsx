import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { FolderParams } from 'domain/folder/folder.types';

import { AhfFolderContainer } from '../folder/folder.container';
import { AhfFolderProvider } from '../folder/store/context';

interface Props {
  deviceId: number;
  folders: Record<string, FolderParams>;
  folderIndex: number;
}

export const AhfFoldersContainer: React.FC<Props> = ({
  deviceId,
  folders,
  folderIndex,
}: Props) => {
  debugger;
  const { update } = useSocketHook();
  const [currentFolderIndex, setCurrentFolderIndex] = useState<number>(
    folderIndex,
  );

  const handleFolderChange = (folderIndex: number) => {
    setCurrentFolderIndex(folderIndex);
    update(deviceId.toString(), folderIndex.toString());
  };

  useEffect(() => {
    update(deviceId.toString(), folderIndex.toString());
  }, [update, deviceId, folderIndex]);

  return (
    <SwipeableViews
      enableMouseEvents
      onChangeIndex={handleFolderChange}
      index={currentFolderIndex}
    >
      {Object.keys(folders).map((folderName, folderIndex) =>
        folderIndex === currentFolderIndex ? (
          <React.Fragment key={folderName}>
            <AhfFolderProvider name={folderName} params={folders[folderName]}>
              <AhfFolderContainer />
            </AhfFolderProvider>
          </React.Fragment>
        ) : (
          <React.Fragment key={folderName} />
        ),
      )}
    </SwipeableViews>
  );
};
