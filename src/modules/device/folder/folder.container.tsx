import { useSocketHook } from 'hooks/socket-hook';
import i18n from 'i18n';
import React, { useContext, useEffect } from 'react';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';

import { AhfParamComponent } from '../param/param.component';
import { useFolderContainerStyles } from './folder.container.styles';
import { AhfFolderContext } from './store/context';

export const AhfFolderContainer: React.FC = () => {
  const classes = useFolderContainerStyles();
  const { init } = useSocketHook();

  const { state, dispatch } = useContext(AhfFolderContext);

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  useEffect(() => {
    const subscription = init(dispatch);
    return () => subscription.unsubscribe();
  }, [dispatch, init]);

  return (
    <>
      <div>{state.name}</div>
      <div className={classes.root}>
        {state.params.ParData.map((param) => (
          <AhfParamComponent
            key={param.ParamID}
            param={param}
            currentLanguage={currentLanguage}
          />
        ))}
      </div>
    </>
  );
};
