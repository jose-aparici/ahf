import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CardContent, CardHeader, Grid, Typography } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';

import { AhfChannelsComponent } from './channels/channels.component';
import { AhfTriggerLevelComponent } from './trigger-level/trigger-level.component';
import { AhfTriggerComponent } from './trigger/trigger.component';

export const AhfOscilloscopeSettingsContainer: React.FC = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AhfContext);
  const [editMode, setEditMode] = useState(false);
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const {
    channels,
    params,
    trigger,
    triggerLevel,
  } = state.oscilloscope.settings;

  const handleChannelChange = (id: number, number: number) => {
    const selectedChannel = params.find((param) => param.paramId === id);

    if (selectedChannel) {
      const newChannels = [...channels];
      newChannels[number] = selectedChannel;
      dispatch({
        type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
        payload: {
          settings: {
            channels: newChannels,
            params,
            trigger,
            triggerLevel,
          },
        },
      });
    }
  };

  const handleTriggerChange = (id: number) => {
    const selectedTrigger = params.find((param) => param.paramId === id);

    if (selectedTrigger) {
      dispatch({
        type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
        payload: {
          settings: {
            channels,
            params,
            trigger: selectedTrigger,
            triggerLevel,
          },
        },
      });
    }
  };

  const handleTriggerLevelChange = (value: string) => {
    setEditMode(false);
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: {
        settings: {
          channels,
          params,
          trigger,
          triggerLevel: +value,
        },
      },
    });
  };

  return (
    <AhfCardFullPageComponent>
      <CardHeader
        title={
          <Typography variant="h3">
            {t('OSCILLOSCOPE_SETTINGS.TITLE')}
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            {trigger && (
              <AhfTriggerComponent
                params={params}
                trigger={trigger}
                currentLanguage={currentLanguage}
                onTriggerChange={handleTriggerChange}
              />
            )}
          </Grid>
          <Grid item xs={4}>
            {trigger && (
              <AhfTriggerLevelComponent
                triggerLevel={triggerLevel}
                editMode={editMode}
                setEditMode={() => setEditMode((prev) => !prev)}
                onSave={handleTriggerLevelChange}
              />
            )}
          </Grid>
        </Grid>
        <Grid container>
          <AhfChannelsComponent
            channels={channels}
            params={params}
            currentLanguage={currentLanguage}
            onChannelChange={handleChannelChange}
          />
        </Grid>
      </CardContent>
    </AhfCardFullPageComponent>
  );
};
