import { AhfContext } from 'contexts/store/context';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';

import { useChannelsContainerStyles } from './channels.container.styles';

export const AhfChannelsContainer: React.FC = () => {
  const { t } = useTranslation();
  const classes = useChannelsContainerStyles();

  const { state, dispatch } = useContext(AhfContext);
  const { channels, deviceChannels } = state.oscilloscope.settings;

  const handleSave = (id: number, number: number) => {
    const selectedChannel = deviceChannels.find(
      (deviceChannel) => deviceChannel.id === id,
    );

    if (selectedChannel) {
      const newChannels = [...channels];
      newChannels[number] = selectedChannel;

      const settings = {
        ...state.oscilloscope.settings,
        channels: newChannels,
      };

      dispatch({
        type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
        payload: settings,
      });
    }
  };

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
                  value={channel.id}
                  onChange={(event) =>
                    handleSave(event.target.value as number, index)
                  }
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'left',
                    },
                    transformOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    getContentAnchorEl: null,
                    style: { maxHeight: '350px' },
                  }}
                >
                  {deviceChannels.map((deviceChannel, index) => {
                    return (
                      <MenuItem key={index} value={deviceChannel.id}>
                        {`${deviceChannel.id} ${deviceChannel.name}`}
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
