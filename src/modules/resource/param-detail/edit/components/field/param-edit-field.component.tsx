import React from 'react';
import { useTranslation } from 'react-i18next';

import { TextField } from '@material-ui/core';

import { ParamError, ParamType } from 'domain/param/param.types';

interface Props {
  value: string;
  type: ParamType;
  error: ParamError | undefined;
  onFocus: (value: string) => void;
}
export const AhfParamEditFieldComponent: React.FC<Props> = ({
  type,
  value,
  error,
  onFocus,
}: Props) => {
  const { t } = useTranslation();

  const renderEditComponent = () => {
    switch (type) {
      case ParamType.ENUM:
      case ParamType.FLOATING_POINT:
      case ParamType.UNSIGNED_INTEGER:
      case ParamType.SIGNED_INTEGER:
      case ParamType.STRING:
      case ParamType.IP:
      case ParamType.MAC:
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
