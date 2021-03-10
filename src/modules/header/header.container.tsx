import React, { FC, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AhfContext } from 'store/context';

import { AppBar, Toolbar } from '@material-ui/core';

import {
  AHF_LANGUAGES,
  DEFAULT_LANGUAGE,
} from 'domain/languages/languages.constants';

import { AhfFolderTreeViewComponent } from './folder-tree-view/folder-tree-view.component';
import { AhfLanguageSelectorComponent } from './language-selector/language-selector.component';
import { AhfNavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { AhfNavigationIconsComponent } from './navigation-icons/navigation-icons.component';
import { AhfSideBarButtonComponent } from './side-bar-button/side-bar-button.component';
import { AhfSideBarComponent } from './side-bar/side-bar.component';

export const AhfHeaderContainer: FC = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    i18n.language || DEFAULT_LANGUAGE.locale,
  );

  const { state } = useContext(AhfContext);

  const handleToggleSideBar = (): void => setSideBarOpen(!sideBarOpen);
  const handleChangeLanguage = (locale = DEFAULT_LANGUAGE.locale) =>
    i18n.changeLanguage(locale).then(() => {
      setLanguage(i18n.language);
    });
  return (
    <>
      <AppBar>
        <Toolbar>
          <AhfSideBarButtonComponent onToggleSideBar={handleToggleSideBar} />

          <AhfNavigationButtonsComponent />
          {language && (
            <AhfLanguageSelectorComponent
              currentLanguage={language}
              languages={AHF_LANGUAGES}
              onChangeLanguage={handleChangeLanguage}
            />
          )}
          <AhfNavigationIconsComponent />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <AhfSideBarComponent
        isOpen={sideBarOpen}
        onToggleSideBar={handleToggleSideBar}
      >
        <AhfFolderTreeViewComponent
          devices={state.devices}
          onToggleSideBar={handleToggleSideBar}
        />
      </AhfSideBarComponent>
    </>
  );
};
