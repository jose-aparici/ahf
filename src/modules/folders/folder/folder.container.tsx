import { useSocketHook } from 'hooks/socket-hook';
import i18n from 'i18n';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { PARAM } from 'pages/App.routes';

import { AhfParamComponent } from '../param/param.component';
import { useFolderContainerStyles } from './folder.container.styles';
import { AhfFolderContext } from './store/context';

interface Props {
  folderName: string;
}

export const AhfFolderContainer: React.FC<Props> = ({ folderName }: Props) => {
  const classes = useFolderContainerStyles();
  const { listen } = useSocketHook();
  const history = useHistory();

  const { state, dispatch } = useContext(AhfFolderContext);

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const handleClickParam = (paramId: number) => {
    history.push(`${folderName}/${PARAM}/${paramId}`);
  };

  useEffect(() => {
    const subscription = listen(dispatch);
    return () => subscription.unsubscribe();
  }, [dispatch, listen]);

  return (
    <>
      <div>{state.name}</div>
      <div className={classes.root}>
        {state.params.ParData.map((param) => (
          <AhfParamComponent
            key={param.ParamID}
            param={param}
            currentLanguage={currentLanguage}
            onClickParam={handleClickParam}
          />
        ))}
      </div>
    </>
  );
};
