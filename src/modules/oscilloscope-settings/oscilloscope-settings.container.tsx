import { AhfContext } from 'contexts/store/context';
import React, { useContext, useEffect } from 'react';

import { CardContent, Grid } from '@material-ui/core';

import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { AhfChannelsContainer } from './channels/channels.container';
import { AhfDelayContainer } from './delay/delay.container';
import { AhfModesContainer } from './modes/modes.cotainer';
import { useOScilloscopeSettingsContainerStyles } from './oscilloscope-settings.container.styles';
import { AhfSamplePeriodContainer } from './sample-period/sample-period.container';
import { AhfTriggerLevelContainer } from './trigger-level/trigger-level.container';
import { AhfTriggerContainer } from './trigger/trigger.container';

export const AhfOscilloscopeSettingsContainer: React.FC = () => {
  const classes = useOScilloscopeSettingsContainerStyles();

  const { state } = useContext(AhfContext);
  const { writeOscilloscopeSetttings } = useSocketHook();

  useEffect(() => {
    writeOscilloscopeSetttings(state.oscilloscope.settings);
  }, [writeOscilloscopeSetttings, state.oscilloscope.settings]);

  return (
    <AhfCardFullPageComponent>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <AhfTriggerContainer />
          </Grid>
          <Grid item xs={4}>
            <AhfTriggerLevelContainer />
          </Grid>
          <Grid item xs={4}>
            <AhfModesContainer />
          </Grid>
          <Grid container item xs={12}>
            <AhfSamplePeriodContainer />
          </Grid>
          <Grid container item xs={12}>
            <AhfDelayContainer />
          </Grid>
        </Grid>
        <Grid container className={classes.channelsContainer}>
          <AhfChannelsContainer />
        </Grid>
      </CardContent>
    </AhfCardFullPageComponent>
  );
};
