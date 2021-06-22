import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CardContent, CardHeader, Grid, Typography } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';

import { AhfChannelsComponent } from './channels/channels.component';
import { useOscilloscopeSettingsContainerStyles } from './oscilloscope-settings.container.styles';

export const AhfOscilloscopeSettingsContainer: React.FC = () => {
  const { t } = useTranslation();
  const classes = useOscilloscopeSettingsContainerStyles();
  const { state, dispatch } = useContext(AhfContext);
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const { channels, params } = state.oscilloscope.settings;

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
          },
        },
      });
    }
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
