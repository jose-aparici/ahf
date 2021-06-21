import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import {
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';

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
    debugger;

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
                          handleChannelChange(
                            event.target.value as number,
                            index,
                          )
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
        </Grid>
      </CardContent>
    </AhfCardFullPageComponent>
  );
};
