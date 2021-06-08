import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import React, { useContext, useEffect, useRef, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Tab, Tabs } from '@material-ui/core';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { INITIAL_MARKER } from 'domain/settings/settings.contants';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { useSettingsContainerStyles } from './settings.container.styles';
import { AhfTabContainer } from './tab/tab.container';

export const AhfSettingsContainer: React.FC = () => {
  const classes = useSettingsContainerStyles();
  const [currentTab, setCurrentTab] = useState(0);
  const initialMarker = useRef<number>(INITIAL_MARKER);
  const { stopUpdate } = useSocketHook();

  const { state } = useContext(AhfContext);
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  useEffect(() => {
    stopUpdate();
  }, [stopUpdate]);

  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    tabIndex: number,
  ) => {
    setCurrentTab(tabIndex);
  };

  const handleChangeIndex = (index: number) => {
    setCurrentTab(index);
  };
  return (
    <>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        variant="fullWidth"
        classes={{ root: classes.root }}
      >
        {state.settings?.children.map((tab) => (
          <Tab key={tab.id} label={tab.label[currentLanguage]} />
        ))}
      </Tabs>
      <SwipeableViews index={currentTab} onChangeIndex={handleChangeIndex}>
        {state.settings?.children && state.settings?.children.length > 0 ? (
          state.settings?.children.map((tab) => (
            <React.Fragment key={tab.id}>
              <AhfTabContainer
                tab={tab}
                currentLanguage={currentLanguage}
                initialMarker={initialMarker}
              />
            </React.Fragment>
          ))
        ) : (
          <></>
        )}
      </SwipeableViews>
    </>
  );
};
