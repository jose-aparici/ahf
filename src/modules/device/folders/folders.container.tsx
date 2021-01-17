import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { FolderParams } from 'domain/folder/folder.types';
import { extractFolderIndex } from 'domain/navigation/navigation.utils';

import { AhfFolderContainer } from '../folder/folder.container';
import { AhfFolderProvider } from '../folder/store/context';

interface Props {
  deviceId: number;
  folders: Record<string, FolderParams>;
}

export const AhfFoldersContainer: React.FC<Props> = ({
  deviceId,
  folders,
}: Props) => {
  const { update } = useSocketHook();
  const location = useLocation();
  const [currentFolderIndex, setCurrentFolderIndex] = useState<number>();

  useEffect(() => {
    if (!location.search) {
      setCurrentFolderIndex(0);
    } else {
      const queryParams = new URLSearchParams(location.search);
      setCurrentFolderIndex(extractFolderIndex(queryParams));
    }
  }, [location.search]);

  const handleFolderChange = (folderIndex: number) => {
    setCurrentFolderIndex(folderIndex);
    update(deviceId.toString(), folderIndex.toString());
  };

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
