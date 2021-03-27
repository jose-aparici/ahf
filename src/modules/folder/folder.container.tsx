import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';

import { Folder } from 'domain/folder/folder.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';

import { useFolderNavigation } from './folder-navigation.hook';
import { useFolderContainerStyles } from './folder.container.styles';
import { AhfParamComponent } from './param/param.component';
import { AhfFolderContext } from './store/context';

interface ParamTypes {
  deviceId: string;
}

export const AhfFolderContainer: React.FC = () => {
  const classes = useFolderContainerStyles();
  //const { state } = useContext(AhfContext);
  const { deviceId } = useParams<ParamTypes>();
  //const [currentFolder, setCurrentFolder] = useState<Folder>();
  const { folderState, dispatch } = useContext(AhfFolderContext);

  const { update, stopUpdate, listen } = useSocketHook();

  // const { url } = useRouteMatch();
  const history = useHistory();
  const { i18n } = useTranslation();

  const { goNext, goPrevious } = useFolderNavigation();

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
  }, [dispatch, listen, stopUpdate, update, deviceId, folderState.folder.id]);

  /* useEffect(() => {
    if (state?.devices[+deviceId]?.structure) {
      const folder = findFolderById(url, state.devices[+deviceId].structure);
      if (folder) {
        setCurrentFolder(folder);
        update(deviceId, folder.id.replace(/\/devices\/([A-Za-z0-9]+)\//, ''));
      }
    }
  }, [deviceId, state, url, update]); */

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
    // setCurrentFolder(folder);
    //dispatch({});
    debugger;
    history.replace(history.location.pathname.replace(/[^]*$/, folder.id));
  };

  const handleClickParam = () => console.log('clicked');

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  return (
    <>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>

      {folderState && folderState.folder.params.length > 0 ? (
        <div className={classes.paramsContainer}>
          {folderState.folder.params.map((param) => (
            <AhfParamComponent
              key={param.paramId}
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
