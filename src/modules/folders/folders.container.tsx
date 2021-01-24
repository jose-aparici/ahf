import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { FolderParams } from 'domain/folder/folder.types';

import { AhfFolderContainer } from './folder/folder.container';
import { AhfFolderProvider } from './folder/store/context';

interface Props {
  deviceId: number;
  folderId: number;
  folders: Record<string, FolderParams>;
}

export const AhfFoldersContainer: React.FC<Props> = ({
  deviceId,
  folderId,
  folders,
}: Props) => {
  const { update } = useSocketHook();
  const history = useHistory();
  const [currentFolderIndex, setCurrentFolderIndex] = useState<number>(
    folderId,
  );

  const handleFolderChange = (folderIndex: number) => {
    update(deviceId.toString(), folderIndex.toString());
    setCurrentFolderIndex(folderIndex);
    history.replace(
      history.location.pathname.replace(/.$/, folderIndex.toString()),
    );
  };

  useEffect(() => {
    setCurrentFolderIndex(folderId);
  }, [folderId]);

  useEffect(() => {
    currentFolderIndex !== undefined &&
      update(deviceId.toString(), currentFolderIndex.toString());
  }, [update, deviceId, currentFolderIndex]);

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
              <AhfFolderContainer folderId={currentFolderIndex} />
            </AhfFolderProvider>
          </React.Fragment>
        ) : (
          <React.Fragment key={folderName} />
        ),
      )}
    </SwipeableViews>
  );
};
