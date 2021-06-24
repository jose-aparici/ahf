import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import React, { useContext, useState } from 'react';

import { CardContent, Grid } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';

import { AhfChannelsComponent } from './channels/channels.component';
import { AhfDelayComponent } from './delay/delay.component';
import { AhfModesContainer } from './modes/modes.cotainer';
import { useOScilloscopeSettingsContainerStyles } from './oscilloscope-settings.container.styles';
import { AhfSampleRateComponent } from './sample-rate/sample-rate.component';
import { AhfTriggerLevelContainer } from './trigger-level/trigger-level.container';
import { AhfTriggerContainer } from './trigger/trigger.container';

export const AhfOscilloscopeSettingsContainer: React.FC = () => {
  const classes = useOScilloscopeSettingsContainerStyles();
  const { state, dispatch } = useContext(AhfContext);
  const [editSampleRate, setEditSampleRate] = useState(false);
  const [editDelay, setEditDelay] = useState(false);
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const {
    channels,
    params,
    trigger,
    triggerLevel,
    mode,
    sampleRate,
    delay,
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
            mode,
            sampleRate,
            delay,
          },
        },
      });
    }
  };

  const handleSampleRateChange = (value: string) => {
    setEditSampleRate(false);
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: {
        settings: {
          channels,
          params,
          trigger,
          triggerLevel,
          mode,
          sampleRate: +value,
          delay,
        },
      },
    });
  };

  const handleDelayChange = (value: string) => {
    setEditDelay(false);
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: {
        settings: {
          channels,
          params,
          trigger,
          triggerLevel,
          mode,
          sampleRate,
          delay: +value,
        },
      },
    });
  };

  return (
    <AhfCardFullPageComponent>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <AhfTriggerContainer currentLanguage={currentLanguage} />
          </Grid>
          <Grid item xs={4}>
            <AhfTriggerLevelContainer />
          </Grid>
          <Grid item xs={4}>
            <AhfModesContainer />
          </Grid>
          <Grid item xs={12}>
            <AhfSampleRateComponent
              sampleRate={sampleRate}
              editMode={editSampleRate}
              setEditMode={() => setEditSampleRate((prev) => !prev)}
              onSave={handleSampleRateChange}
            />
          </Grid>
          <Grid item xs={12}>
            <AhfDelayComponent
              delay={delay}
              editMode={editDelay}
              setEditMode={() => setEditDelay((prev) => !prev)}
              onSave={handleDelayChange}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.channelsContainer}>
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
