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
    <Grid container>
      {channels.map((channel, index) => {
        return (
          <Grid container key={channel.paramId}>
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
                <Typography>C1 = xxx</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>C2 = xxx</Typography>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
