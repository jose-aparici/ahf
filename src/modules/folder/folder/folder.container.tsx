import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Masonry from 'react-masonry-css';
import { useHistory } from 'react-router-dom';

import { Folder } from 'domain/folder/folder.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param } from 'domain/param/param.types';
import { AhfNavigationNextComponent } from 'modules/shared/navigation-next/navigation-next.component';
import { AhfNavigationPreviousComponent } from 'modules/shared/navigation-previous/navigation-previous.component';

import { AhfFolderCardComponent } from '../folder-card/folder-card.component';
import { AhfFolderMainComponent } from '../folder-main/folder-main.component';
import { AhfParamCardComponent } from '../param-card/param-card.component';
import { AhfFolderContext } from '../store/context';
import { useFolderNavigation } from './folder-navigation.hook';
import { useFolderContainerStyles } from './folder.container.styles';

export const AhfFolderContainer: React.FC = () => {
  const classes = useFolderContainerStyles();
  const { folderState } = useContext(AhfFolderContext);

  const history = useHistory();
  const { i18n } = useTranslation();

  const { goNext, goPrevious } = useFolderNavigation();

  const handleNext = () => {
    const nextFolder = goNext(folderState.folder);
    nextFolder?.id && handleFolderChange(nextFolder);
  };

  const handlePrevious = () => {
    const previousFolder = goPrevious(folderState.folder);
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

  const folderCards = folderState.folder.children.map((folder) => {
    return (
      <AhfFolderCardComponent
        key={folder.id}
        folder={folder}
        onClickFolder={handleClickFolder}
      />
    );
  });

  const paramsCards = folderState.folder.params.map((param) => {
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
      {folderState.folder.id && (
        <>
          {folderState.folder.isMainFolder ? (
            <AhfFolderMainComponent params={folderState.folder.params} />
          ) : (
            <Masonry
              breakpointCols={3}
              className={classes.masonryGrid}
              columnClassName={classes.masonryGridColumn}
            >
              {[...folderCards, ...paramsCards].map((card) => card)}
            </Masonry>
          )}

          {goPrevious(folderState.folder) && (
            <AhfNavigationPreviousComponent onPrevious={handlePrevious} />
          )}
          {goNext(folderState.folder) && (
            <AhfNavigationNextComponent onNext={handleNext} />
          )}
        </>
      )}
    </>
  );
};
