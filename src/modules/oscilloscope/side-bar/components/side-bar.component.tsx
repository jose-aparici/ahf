import React from 'react';

import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core';

import { Channel } from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { Colors } from 'domain/oscilloscope/oscilloscope.constants';

import { useSideBarComponentStyles } from './side-bar.component.styles';

interface Props {
  channels: Channel[];
  currentLanguage: number;
  sliderValues: number[][];
  onToggleChannel: (index: number) => void;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  channels,
  currentLanguage,
  sliderValues,
  onToggleChannel,
}: Props) => {
  const classes = useSideBarComponentStyles();
  return (
    <Grid container className={classes.gridContainer}>
      {channels.map((channel, index) => {
        return (
          channel.value && (
            <Grid container key={index}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={channel.selected}
                      onChange={() => onToggleChannel(index)}
                      color="default"
                      classes={{
                        root: classes.checkBox,
                      }}
                    />
                  }
                  label={
                    <Typography>
                      {channel.value.name[currentLanguage]}
                    </Typography>
                  }
                  style={{ color: Colors[index] }}
                />
              </Grid>
              <Grid container className={classes.gridValuesContainer}>
                <Grid item xs={12}>
                  <Typography display="inline">
                    {sliderValues[index] && `C1 = ${sliderValues[index][0]}`}
                  </Typography>
                  <Typography display="inline">
                    {sliderValues[index] && `C2 = ${sliderValues[index][1]}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )
        );
      })}
    </Grid>
  );
};
