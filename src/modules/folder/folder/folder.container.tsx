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
  const { state } = useContext(AhfFolderContext);

  const history = useHistory();
  const { i18n } = useTranslation();

  const { goNext, goPrevious } = useFolderNavigation();

  const handleNext = () => {
    const nextFolder = goNext(state.folder);
    nextFolder?.id && handleFolderChange(nextFolder);
  };

  const handlePrevious = () => {
    const previousFolder = goPrevious(state.folder);
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

  const folderCards = state.folder.children.map((folder) => {
    return (
      <AhfFolderCardComponent
        key={folder.id}
        folder={folder}
        onClickFolder={handleClickFolder}
      />
    );
  });

  const paramsCards = state.folder.params.map((param) => {
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
      {state.folder.id && (
        <>
          {state.folder.isMainFolder ? (
            <AhfFolderMainComponent params={state.folder.params} />
          ) : (
            <Masonry
              breakpointCols={3}
              className={classes.masonryGrid}
              columnClassName={classes.masonryGridColumn}
            >
              {[...folderCards, ...paramsCards].map((card) => card)}
            </Masonry>
          )}

          {goPrevious(state.folder) && (
            <AhfNavigationPreviousComponent onPrevious={handlePrevious} />
          )}
          {goNext(state.folder) && (
            <AhfNavigationNextComponent onNext={handleNext} />
          )}
        </>
      )}
    </>
  );
};
