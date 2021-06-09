import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Tab, Tabs } from '@material-ui/core';

import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfCommand } from 'domain/ahf/ahf.types';
import { Action } from 'domain/app/app.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { ParamRead } from 'domain/param/param.types';
import {
  INITIAL_MARKER,
  SETTINGS_DEVICE_ID,
} from 'domain/settings/settings.contants';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { useSettingsContainerStyles } from './settings.container.styles';
import { AhfTabContainer } from './tab/tab.container';

export interface State {
  setting: ParamRead | undefined;
}

export const AhfSettingsContainer: React.FC = () => {
  const classes = useSettingsContainerStyles();
  const [currentTab, setCurrentTab] = useState(0);
  const initialMarker = useRef<number>(INITIAL_MARKER);

  const [state, dispatch] = useReducer(
    (state: State, action: Action): State => {
      const { type, payload } = action;
      const paramRead = payload as AhfParamRead;
      if (paramRead.DeviceID !== SETTINGS_DEVICE_ID) {
        return state;
      }
      switch (type) {
        case AhfCommand.PARAM_DETAIL:
          debugger;
          return {
            setting: {
              deviceId: paramRead.DeviceID,
              folderName: paramRead.FolderName,
              marker: paramRead.Marker,
              paramPos: paramRead.ParamPos,
            },
          };
        default:
          return state;
      }
    },
    {
      setting: undefined,
    },
  );

  const { state: appState } = useContext(AhfContext);
  const { listen } = useSocketHook();

  useEffect(() => {
    const subscription = listen(dispatch);
    return () => {
      subscription.unsubscribe();
    };
  }, [listen]);

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

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
        {appState.settings?.children.map((tab) => (
          <Tab key={tab.id} label={tab.label[currentLanguage]} />
        ))}
      </Tabs>
      <SwipeableViews index={currentTab} onChangeIndex={handleChangeIndex}>
        {appState.settings?.children &&
        appState.settings?.children.length > 0 ? (
          appState.settings?.children.map((tab) => (
            <React.Fragment key={tab.id}>
              <AhfTabContainer
                tab={tab}
                settingToEdit={state.setting}
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
