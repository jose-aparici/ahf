import React from 'react';

import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core';

import { Colors } from 'domain/oscilloscope/oscilloscope.constants';
import { Channel } from 'domain/oscilloscope/oscilloscope.types';

import { useSideBarComponentStyles } from './side-bar.component.styles';

interface Props {
  channels: Channel[];
  currentLanguage: number;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  channels,
  currentLanguage,
}: Props) => {
  const classes = useSideBarComponentStyles();
  return (
    <Grid container className={classes.gridContainer}>
      {channels.map((channel, index) => {
        return (
          <Grid container key={index}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={true}
                    onChange={() => 0}
                    color="default"
                    name="checkedB"
                    classes={{
                      root: classes.checkBox,
                    }}
                  />
                }
                label={<Typography>{channel.name[currentLanguage]}</Typography>}
                style={{ color: Colors[index] }}
              />
            </Grid>
            <Grid container className={classes.gridValuesContainer}>
              <Grid item xs={12}>
                <Typography display="inline">C1 = xxx</Typography>
                <Typography display="inline">C2 = xxx</Typography>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
