import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import React, { useContext, useState } from 'react';

import { CardContent, Grid } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Mode } from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';

import { AhfChannelsComponent } from './channels/channels.component';
import { AhfDelayComponent } from './delay/delay.component';
import { AhfModesComponent } from './modes/modes.component';
import { AhfSampleRateComponent } from './sample-rate/sample-rate.component';
import { AhfTriggerLevelComponent } from './trigger-level/trigger-level.component';
import { AhfTriggerComponent } from './trigger/trigger.component';

export const AhfOscilloscopeSettingsContainer: React.FC = () => {
  const { state, dispatch } = useContext(AhfContext);
  const [editTriggerLevel, setEditTriggerLevel] = useState(false);
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
            mode,
            sampleRate,
            delay,
          },
        },
      });
    }
  };

  const handleTriggerLevelChange = (value: string) => {
    setEditTriggerLevel(false);
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: {
        settings: {
          channels,
          params,
          trigger,
          triggerLevel: +value,
          mode,
          sampleRate,
          delay,
        },
      },
    });
  };

  const handleModelChange = (value: number) => {
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: {
        settings: {
          channels,
          params,
          trigger,
          triggerLevel: +value,
          mode: value,
          sampleRate,
          delay,
        },
      },
    });
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
            <AhfTriggerLevelComponent
              triggerLevel={triggerLevel}
              editMode={editTriggerLevel}
              setEditMode={() => setEditTriggerLevel((prev) => !prev)}
              onSave={handleTriggerLevelChange}
            />
          </Grid>
          <Grid item xs={4}>
            <AhfModesComponent
              modes={[Mode.LESS_THAN, Mode.MORE_THAN]}
              currentMode={mode}
              onChange={handleModelChange}
            />
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
