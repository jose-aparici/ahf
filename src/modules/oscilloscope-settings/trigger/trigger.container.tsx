import { AhfContext } from 'contexts/store/context';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';

import { useTriggerContainerStyles } from './trigger.container.styles';

export const AhfTriggerContainer: React.FC = () => {
  const classes = useTriggerContainerStyles();
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AhfContext);
  const { deviceChannels, trigger } = state.oscilloscope.settings;

  const handleTriggerChange = (id: number) => {
    const selectedTrigger = deviceChannels.find(
      (deviceChannel) => deviceChannel.id === id,
    );

    debugger;

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

      {trigger && trigger.name && (
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
          {deviceChannels.map((deviceChannel, index) => {
            return (
              <MenuItem key={index} value={deviceChannel.id}>
                {`${deviceChannel.id} ${deviceChannel.name}`}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </FormControl>
  );
};
