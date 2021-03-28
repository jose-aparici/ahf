import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Masonry from 'react-masonry-css';
import { useHistory, useParams } from 'react-router-dom';

import { Folder } from 'domain/folder/folder.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { AhfNavigationNextComponent } from 'modules/shared/navigation-next/navigation-next.component';
import { AhfNavigationPreviousComponent } from 'modules/shared/navigation-previous/navigation-previous.component';

import { useFolderNavigation } from './folder-navigation.hook';
import { useFolderContainerStyles } from './folder.container.styles';
import { AhfParamComponent } from './param/param.component';
import { AhfFolderContext } from './store/context';

interface ParamTypes {
  deviceId: string;
}

interface Props {
  folder: Folder;
}

export const AhfFolderContainer: React.FC<Props> = ({ folder }: Props) => {
  const classes = useFolderContainerStyles();
  const { deviceId } = useParams<ParamTypes>();
  const { folderState, dispatch } = useContext(AhfFolderContext);

  const { update, stopUpdate, listen } = useSocketHook();

  const history = useHistory();
  const { i18n } = useTranslation();

  const { goNext, goPrevious } = useFolderNavigation();

  useEffect(() => {
    dispatch({ type: 'FOLDER_CHANGE', payload: folder });
  }, [folder, dispatch]);

  useEffect(() => {
    update(
      deviceId,
      folderState.folder.id.replace(/\/devices\/([A-Za-z0-9]+)\//, ''),
    );
    const subscription = listen(dispatch);

    return () => {
      stopUpdate();
      subscription.unsubscribe();
    };
  }, [
    dispatch,
    listen,
    stopUpdate,
    update,
    deviceId,
    folderState.folder,
    folderState.folder.id,
  ]);

  const handleNext = () => {
    const nextFolder = goNext(folderState.folder);
    nextFolder?.id && handleFolderChange(nextFolder);
  };

  const handlePrevious = () => {
    const previousFolder = goPrevious(folderState.folder);
    previousFolder?.id && handleFolderChange(previousFolder);
  };

  const handleFolderChange = (folder: Folder) => {
    update(deviceId, folder.id.replace(/\/devices\/([A-Za-z0-9]+)\//, ''));
    dispatch({ type: 'FOLDER_CHANGE', payload: folder });
    history.replace(history.location.pathname.replace(/[^]*$/, folder.id));
  };

  const handleClickParam = () => console.log('clicked');

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  return (
    <>
      {folderState && folderState.folder.params.length > 0 ? (
        <>
          <Masonry
            breakpointCols={3}
            className={classes.masonryGrid}
            columnClassName={classes.masonryGridColumn}
          >
            {folderState.folder.params.map((param) => (
              <AhfParamComponent
                key={param.paramId}
                currentLanguage={currentLanguage}
                param={param}
                onClickParam={handleClickParam}
              />
            ))}
          </Masonry>
          <AhfNavigationPreviousComponent onPrevious={handlePrevious} />
          <AhfNavigationNextComponent onNext={handleNext} />
        </>
      ) : (
        <div>Empty folder</div>
      )}
    </>
  );
};
