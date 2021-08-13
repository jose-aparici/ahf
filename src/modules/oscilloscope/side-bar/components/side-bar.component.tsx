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
  c1Value: number;
  c2Value: number;
  onToggleChannel: (index: number) => void;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  channels,
  currentLanguage,
  sliderValues,
  c1Value,
  c2Value,
  onToggleChannel,
}: Props) => {
  const classes = useSideBarComponentStyles();
  return (
    <Grid container className={classes.gridContainer}>
      <Grid container spacing={2}>
        <Grid item>{`C1 = ${c1Value}`}</Grid>
        <Grid item>{`C2 = ${c2Value}`}</Grid>
      </Grid>
      <Grid container>
        <Grid item>{`Dt = ${c2Value - c1Value}`}</Grid>
      </Grid>

      {channels.map((channel, index) => {
        return (
          channel.name && (
            <Grid container key={index}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={channel.id === 0}
                      checked={channel.selected}
                      onChange={() => onToggleChannel(index)}
                      color="default"
                      classes={{
                        root: classes.checkBox,
                      }}
                    />
                  }
                  label={<Typography>{channel.name}</Typography>}
                  style={{ color: Colors[index] }}
                />
              </Grid>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography display="inline">
                    {sliderValues[index] &&
                      `C1 = ${sliderValues[index][0].toFixed(2)}`}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography display="inline">
                    {sliderValues[index] &&
                      `C2 = ${sliderValues[index][1].toFixed(2)}`}
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
