import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { FolderParams } from 'domain/folder/folder.types';
import { findFolderIndexByName } from 'domain/folder/folder.utils';
import { AhfStepperComponent } from 'modules/shared/stepper/stepper.component';

import { AhfFolderContainer } from './folder/folder.container';
import { AhfFolderProvider } from './folder/store/context';

interface Props {
  deviceId: number;
  folderName: string;
  folders: Record<string, FolderParams>;
}

type CurrentFolder = {
  index: number;
  name: string;
};

export const AhfFoldersContainer: React.FC<Props> = ({
  deviceId,
  folderName,
  folders,
}: Props) => {
  const { update } = useSocketHook();
  const history = useHistory();
  const [currentFolder, setCurrentFolder] = useState<CurrentFolder>(() => {
    const index = findFolderIndexByName(Object.keys(folders), folderName);
    return { index, name: folderName };
  });

  const handleFolderChange = (folderIndex: number) => {
    update(deviceId.toString(), folderIndex.toString());
    const folderName = Object.keys(folders)[folderIndex];
    setCurrentFolder({
      index: folderIndex,
      name: folderName,
    });
    history.replace(history.location.pathname.replace(/[^]*$/, folderName));
  };

  useEffect(() => {
    const index = findFolderIndexByName(Object.keys(folders), folderName);
    setCurrentFolder({ index, name: folderName });
  }, [folderName, folders]);

  useEffect(() => {
    currentFolder !== undefined &&
      update(deviceId.toString(), currentFolder.index.toString());
  }, [update, deviceId, currentFolder]);

  const handleNextParam = (): void =>
    handleFolderChange(currentFolder.index + 1);
  const handlePreviousParam = (): void =>
    handleFolderChange(currentFolder.index - 1);

  return (
    <>
      <AhfStepperComponent
        totalSteps={Object.keys(folders).length}
        currentStep={currentFolder.index}
        onNext={handleNextParam}
        onBack={handlePreviousParam}
      />
      <SwipeableViews
        enableMouseEvents
        onChangeIndex={handleFolderChange}
        index={currentFolder.index}
      >
        {Object.keys(folders).map((folderName, folderIndex) =>
          folderIndex === currentFolder.index ? (
            <React.Fragment key={folderName}>
              <AhfFolderProvider name={folderName} params={folders[folderName]}>
                <AhfFolderContainer folderName={currentFolder.name} />
              </AhfFolderProvider>
            </React.Fragment>
          ) : (
            <React.Fragment key={folderName} />
          ),
        )}
      </SwipeableViews>
    </>
  );
};
