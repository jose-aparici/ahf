import React from 'react';
import { useTranslation } from 'react-i18next';

import DateFnsUtils from '@date-io/date-fns';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import { ParamError, ParamType } from 'domain/param/param.types';

import { useParamEditFieldComponentStyles } from './param-edit-field.component.styles';

interface Props {
  value: string;
  values: string[];
  type: ParamType;
  error: ParamError | undefined;
  onFocus: (value: string) => void;
  onChange: (value: string) => void;
}
export const AhfParamEditFieldComponent: React.FC<Props> = ({
  type,
  value,
  values,
  error,
  onFocus,
  onChange,
}: Props) => {
  const { t } = useTranslation();
  const classes = useParamEditFieldComponentStyles();

  const renderEditComponent = () => {
    switch (type) {
      case ParamType.DATE:
        return (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
              variant="static"
              openTo="date"
              ampm={false}
              value={value}
              onChange={(date) => date && onChange(date?.getTime().toString())}
            />
          </MuiPickersUtilsProvider>
        );
      case ParamType.ENUM:
        return (
          <RadioGroup
            value={value}
            onChange={(_, value) => onChange(value)}
            classes={{ root: classes.radioGroup }}
          >
            {values.map((value, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={index.toString()}
                  control={<Radio classes={{ root: classes.radio }} />}
                  label={value}
                />
              );
            })}
          </RadioGroup>
        );
      case ParamType.FLOATING_POINT:
      case ParamType.UNSIGNED_INTEGER:
      case ParamType.SIGNED_INTEGER:
      case ParamType.STRING:
      case ParamType.IP:
        return (
          <TextField
            autoFocus
            value={value}
            variant="filled"
            type="string"
            onFocus={() => onFocus(value)}
            error={error ? true : false}
            helperText={error && t(error.text)}
          />
        );

      default:
        return (
          <TextField
            autoFocus
            value={value}
            variant="filled"
            type="string"
            onFocus={() => onFocus(value)}
            error={error ? true : false}
            helperText={error && t(error.text)}
          />
        );
    }
  };

  return <>{renderEditComponent()}</>;
};
