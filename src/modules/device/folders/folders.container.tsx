import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { FolderParams } from 'domain/folder/folder.types';

import { AhfFolderContainer } from '../folder/folder.container';

interface Props {
  deviceId: number;
  folders: Record<string, FolderParams>;
}

export const AhfFoldersContainer: React.FC<Props> = ({
  deviceId,
  folders,
}: Props) => {
  const { update } = useSocketHook();
  const [currentFolderIndex, setCurrentFolderIndex] = useState<number>(0);

  const handleFolderChange = (folderIndex: number) => {
    setCurrentFolderIndex(folderIndex);
    update(deviceId.toString(), folderIndex.toString());
  };

  /*  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position; */

  useEffect(() => {
    update(deviceId.toString(), '0');
  }, [update, deviceId]);

  return (
    <SwipeableViews enableMouseEvents onChangeIndex={handleFolderChange}>
      {Object.keys(folders).map((folderName, folderIndex) =>
        folderIndex === currentFolderIndex ? (
          <React.Fragment key={folderName}>
            <div>{folderName}</div>
            <AhfFolderContainer
              folderIndex={currentFolderIndex}
              params={folders[folderName].ParData}
            />
          </React.Fragment>
        ) : (
          <React.Fragment key={folderName}></React.Fragment>
        ),
      )}
    </SwipeableViews>
  );
};
