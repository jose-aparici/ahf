import React from 'react';
import { useTranslation } from 'react-i18next';

import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import { ParamError, ParamType } from 'domain/param/param.types';

interface Props {
  value: string;
  type: ParamType;
  error: ParamError | undefined;
  onFocus: (value: string) => void;
  onChange: (value: string) => void;
}
export const AhfParamEditFieldComponent: React.FC<Props> = ({
  type,
  value,
  error,
  onFocus,
  onChange,
}: Props) => {
  const { t } = useTranslation();

  const renderEditComponent = () => {
    switch (type) {
      case ParamType.DATE:
        return (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              orientation="landscape"
              variant="static"
              openTo="date"
              value={value}
              onChange={(date) => date && onChange(date?.toString())}
            />
          </MuiPickersUtilsProvider>
        );
      case ParamType.ENUM:
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
