import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Masonry from 'react-masonry-css';
import { useHistory, useLocation } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { Folder } from 'domain/folder/folder.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param } from 'domain/param/param.types';
import { extractDeviceFromPath } from 'domain/path/path.utils';

import { AhfFolderCardComponent } from '../folder-card/folder-card.component';
import { AhfFolderMainComponent } from '../folder-main/folder-main.component';
import { AhfParamCardComponent } from '../param-card/param-card.component';
import { AhfResourceContext } from '../store/context';
import { useFolderNavigation } from './folder-navigation.hook';
import { useFolderContainerStyles } from './folder.container.styles';

export const AhfFolderContainer: React.FC = () => {
  const classes = useFolderContainerStyles();
  const { resourceState } = useContext(AhfResourceContext);
  const location = useLocation();
  const { state } = useContext(AhfContext);

  const history = useHistory();
  const { i18n } = useTranslation();

  const { getNext, getPrevious } = useFolderNavigation();

  const handleNext = () => {
    const nextFolder = getNext(resourceState.folder);
    nextFolder?.id && handleFolderChange(nextFolder);
  };

  const handlePrevious = () => {
    const previousFolder = getPrevious(resourceState.folder);
    previousFolder?.id && handleFolderChange(previousFolder);
  };

  const handleFolderChange = (folder: Folder) => {
    history.push(history.location.pathname.replace(/[^]*$/, folder.id));
  };

  const handleClickParam = (param: Param) =>
    history.push(`${history.location.pathname}/${param.paramId.toString()}`);

  const handleClickFolder = (folder: Folder) => handleFolderChange(folder);

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const folderCards = resourceState.folder.children.map((folder) => {
    return (
      <AhfFolderCardComponent
        key={folder.id}
        folder={folder}
        onClickFolder={handleClickFolder}
      />
    );
  });

  const paramsCards = resourceState.folder.params.map((param) => {
    return (
      <AhfParamCardComponent
        key={param.paramId}
        currentLanguage={currentLanguage}
        param={param}
        onClickParam={handleClickParam}
      />
    );
  });

  return (
    <>
      {resourceState.folder.id && (
        <>
          {resourceState.folder.isMainFolder ? (
            <AhfFolderMainComponent
              params={resourceState.folder.params}
              deviceType={
                state.devices[+extractDeviceFromPath(location.pathname)].info
                  .type
              }
            />
          ) : (
            <Masonry
              breakpointCols={3}
              className={classes.masonryGrid}
              columnClassName={classes.masonryGridColumn}
            >
              {[...folderCards, ...paramsCards].map((card) => card)}
            </Masonry>
          )}
        </>
      )}
    </>
  );
};
