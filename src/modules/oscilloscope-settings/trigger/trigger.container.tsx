import { AhfContext } from 'contexts/store/context';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';
import { Channel } from 'domain/oscilloscope-settings/oscilloscope-settings.types';

import { useTriggerContainerStyles } from './trigger.container.styles';

export const AhfTriggerContainer: React.FC = () => {
  const classes = useTriggerContainerStyles();
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AhfContext);
  const { deviceChannels, trigger } = state.oscilloscope.settings;

  const [triggerChannels, setTriggerChannels] = useState<Channel[]>();

  useEffect(() => {
    const exists = deviceChannels.find(
      (deviceChannel) => deviceChannel.id === trigger.id,
    );

    exists
      ? setTriggerChannels(deviceChannels)
      : setTriggerChannels([
          ...deviceChannels,
          { id: 0, name: '---', selected: false },
        ]);
  }, [deviceChannels, trigger]);

  const handleTriggerChange = (id: number) => {
    const selectedTrigger = deviceChannels.find(
      (deviceChannel) => deviceChannel.id === id,
    );

    if (selectedTrigger) {
      const settings = {
        ...state.oscilloscope.settings,
        trigger: selectedTrigger,
      };
      dispatch({
        type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
        payload: settings,
      });
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel shrink id={`trigger`} classes={{ root: classes.label }}>
        {t('OSCILLOSCOPE_SETTINGS.SECTIONS.TRIGGER.TITLE')}
      </InputLabel>

      {trigger && trigger.name && triggerChannels && (
        <Select
          labelId={`trigger`}
          id={`select-trigger`}
          value={trigger.id}
          onChange={(event) =>
            handleTriggerChange(event.target.value as number)
          }
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
            style: { maxHeight: '400px' },
          }}
        >
          {triggerChannels.map((deviceChannel, index) => {
            return (
              <MenuItem key={index} value={deviceChannel.id}>
                {deviceChannel.id === 0
                  ? `${deviceChannel.name}`
                  : `${deviceChannel.id} ${deviceChannel.name}`}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </FormControl>
  );
};
