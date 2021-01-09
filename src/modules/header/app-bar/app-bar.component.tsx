import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';

import {
  AHF_LANGUAGES,
  DEFAULT_LANGUAGE,
} from 'domain/languages/languages.constants';
import { AppRoutes } from 'pages/App.routes';

import { AhfLanguageSelectorComponent } from '../language-selector/language-selector.component';
import { useAppBarComponentStyles } from './app-bar.component.styles';

interface Props {
  onToggleSideBar: () => void;
}
export const AhfAppBarComponent: React.FC<Props> = ({
  onToggleSideBar,
}: Props) => {
  const classes = useAppBarComponentStyles();
  const { i18n } = useTranslation();
  const handleChangeLanguage = (locale = DEFAULT_LANGUAGE.locale) =>
    i18n.changeLanguage(locale);
  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolBarContainer}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onToggleSideBar}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.navContainer}>
            <div>
              <Button
                component={Link}
                to={AppRoutes.DevicesPage}
                color="secondary"
              >
                Device home
              </Button>
              <Button
                component={Link}
                to={AppRoutes.DevicesPage}
                color="secondary"
              >
                Oscilloscope
              </Button>
              <Button
                component={Link}
                to={AppRoutes.DevicesPage}
                color="secondary"
              >
                Event log
              </Button>
            </div>

            <div>
              <AhfLanguageSelectorComponent
                currentLanguage={i18n.language}
                languages={AHF_LANGUAGES}
                onChangeLanguage={handleChangeLanguage}
              />
              <IconButton
                component={Link}
                to={AppRoutes.DevicesPage}
                color="inherit"
                aria-label="menu"
              >
                <SettingsIcon />
              </IconButton>

              <IconButton
                component={Link}
                to={AppRoutes.DevicesPage}
                color="inherit"
                aria-label="menu"
              >
                <HomeIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
