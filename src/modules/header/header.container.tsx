import i18n from 'i18n';
import React, { FC, useContext, useState } from 'react';
import { AhfContext } from 'store/context';

import { AppBar, Toolbar } from '@material-ui/core';

import {
  AHF_LANGUAGES,
  DEFAULT_LANGUAGE,
} from 'domain/languages/languages.constants';

import { AhfFolderTreeView } from './folder-tree-view/folder-tree-view.component';
import { AhfLanguageSelectorComponent } from './language-selector/language-selector.component';
import { AhfNavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { AhfNavigationIconsComponent } from './navigation-icons/navigation-icons.component';
import { AhfSideBarButtonComponent } from './side-bar-button/side-bar-button.component';
import { AhfSideBarComponent } from './side-bar/side-bar.component';

export const AhfHeaderContainer: FC = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const { state } = useContext(AhfContext);

  const handleToggleSideBar = (): void => setSideBarOpen(!sideBarOpen);
  const handleChangeLanguage = (locale = DEFAULT_LANGUAGE.locale) =>
    i18n.changeLanguage(locale);

  return (
    <>
      <AppBar>
        <Toolbar>
          <AhfSideBarButtonComponent onToggleSideBar={handleToggleSideBar} />

          <AhfNavigationButtonsComponent />
          {i18n.language && (
            <AhfLanguageSelectorComponent
              currentLanguage={i18n.language}
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
        <AhfFolderTreeView devices={state.devices} />
      </AhfSideBarComponent>
    </>
  );
};
