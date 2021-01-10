import i18n from 'i18n';
import React from 'react';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param } from 'domain/param/param.types';

import { AhfParamComponent } from '../param/param.component';
import { useFolderContainerStyles } from './folder.container.styles';

interface Props {
  params: Param[];
}

export const AhfFolderContainer: React.FC<Props> = ({ params }: Props) => {
  const classes = useFolderContainerStyles();
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;
  return (
    <div className={classes.root}>
      {params.map((param) => (
        <AhfParamComponent
          key={param.ParamID}
          param={param}
          currentLanguage={currentLanguage}
        />
      ))}
    </div>
  );
};
