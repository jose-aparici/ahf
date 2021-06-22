import { classes } from 'istanbul-lib-coverage';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';

import { Param } from 'domain/param/param.types';

import { useChannelsComponentStyles } from './channels.component.styles';

interface Props {
  channels: Param[];
  params: Param[];
  currentLanguage: number;
  onChannelChange: (value: number, index: number) => void;
}

export const AhfChannelsComponent: React.FC<Props> = ({
  channels,
  params,
  currentLanguage,
  onChannelChange,
}: Props) => {
  const { t } = useTranslation();
  const classes = useChannelsComponentStyles();

  return (
    <Grid item container>
      <Typography variant="h4">
        {t('OSCILLOSCOPE_SETTINGS.SECTIONS.CHANNELS.TITLE')}
      </Typography>
      <Grid container spacing={3}>
        {channels.map((channel, index) => {
          return (
            <Grid key={index} item xs={4}>
              <FormControl fullWidth>
                <InputLabel
                  shrink
                  id={`trace-${index}`}
                  classes={{ root: classes.label }}
                >{`${t(
                  'OSCILLOSCOPE_SETTINGS.SECTIONS.CHANNELS.TRACE_TITLE',
                )} ${index + 1}`}</InputLabel>

                <Select
                  labelId={`trace-${index}`}
                  id={`select-trace-${index}`}
                  value={channel.paramId}
                  onChange={(event) =>
                    onChannelChange(event.target.value as number, index)
                  }
                  MenuProps={{ classes: { paper: classes.menuPaper } }}
                >
                  {params.map((param, index) => {
                    return (
                      <MenuItem key={index} value={param.paramId}>
                        {`${param.paramId} ${param.name[currentLanguage]}`}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
