import { AhfContext } from 'contexts/store/context';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { AppCommand } from 'domain/app/app.types';

import { useTriggerContainerStyles } from './trigger.container.styles';

interface Props {
  currentLanguage: number;
}

export const AhfTriggerContainer: React.FC<Props> = ({
  currentLanguage,
}: Props) => {
  const classes = useTriggerContainerStyles();
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AhfContext);
  const { params, trigger } = state.oscilloscope.settings;

  const handleTriggerChange = (id: number) => {
    const selectedTrigger = params.find((param) => param.paramId === id);

    if (selectedTrigger) {
      const settings = {
        ...state.oscilloscope.settings,
        trigger: selectedTrigger,
      };
      dispatch({
        type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
        payload: {
          settings,
        },
      });
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel shrink id={`trigger`} classes={{ root: classes.label }}>
        {t('OSCILLOSCOPE_SETTINGS.SECTIONS.TRIGGER.TITLE')}
      </InputLabel>

      {trigger && (
        <Select
          labelId={`trigger`}
          id={`select-trigger`}
          value={trigger.paramId}
          onChange={(event) =>
            handleTriggerChange(event.target.value as number)
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
      )}
    </FormControl>
  );
};