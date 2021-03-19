import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { Folder } from 'domain/folder/folder.types';
import { findFolderById } from 'domain/folder/folder.utils';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';

import { useFolderNavigation } from './folder-navigation.hook';
import { useFolderContainerStyles } from './folder.container.styles';
import { AhfParamComponent } from './param/param.component';

interface ParamTypes {
  deviceId: string;
}

export const AhfFolderContainer: React.FC = () => {
  const classes = useFolderContainerStyles();
  const { state } = useContext(AhfContext);
  const { deviceId } = useParams<ParamTypes>();
  const [currentFolder, setCurrentFolder] = useState<Folder>();
  const { url } = useRouteMatch();
  const history = useHistory();
  const { i18n } = useTranslation();

  const { goNext, goPrevious } = useFolderNavigation();

  useEffect(() => {
    if (state?.devices[+deviceId]?.structure) {
      const folder = findFolderById(url, state.devices[+deviceId].structure);
      folder && setCurrentFolder(folder);
    }
  }, [deviceId, state, url]);

  const handleNext = () => {
    const nextFolder = currentFolder && goNext(currentFolder);
    nextFolder?.id && handleFolderChange(nextFolder);
  };

  const handlePrevious = () => {
    const previousFolder = currentFolder && goPrevious(currentFolder);
    previousFolder?.id && handleFolderChange(previousFolder);
  };

  const handleFolderChange = (folder: Folder) => {
    setCurrentFolder(folder);
    history.replace(history.location.pathname.replace(/[^]*$/, folder.id));
  };

  const handleClickParam = () => console.log('clicked');

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  return (
    <>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>

      {currentFolder && currentFolder.params.length > 0 ? (
        <div className={classes.paramsContainer}>
          {currentFolder.params.map((param) => (
            <AhfParamComponent
              key={param.ParamID}
              currentLanguage={currentLanguage}
              param={param}
              onClickParam={handleClickParam}
            />
          ))}
        </div>
      ) : (
        <div>Empty folder</div>
      )}
    </>
  );
};
