import React from 'react';

import { Input, MenuItem, Select } from '@material-ui/core';

import { Value } from 'domain/param/param.types';

interface Props {
  type: string;
  value: Value;
  selectValues?: string[];
  onValueChange: (value: string) => void;
  onFocus: (value: boolean) => void;
  onBlur: (value: boolean) => void;
}

export const AhfParamInputComponent: React.FC<Props> = ({
  type,
  value,
  selectValues,
  onValueChange,
  onFocus,
  onBlur,
}: Props) => {
  switch (type) {
    case 'string':
      return (
        <>
          {selectValues && (
            <Select
              defaultValue={selectValues[0]}
              value={value}
              onChange={(event) => onValueChange(event.target.value as string)}
            >
              {selectValues.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          )}
        </>
      );

    case 'integer':
      return (
        <Input
          value={value}
          type="number"
          onChange={(event) => onValueChange(event.target.value as string)}
          onBlur={() => onBlur(false)}
          onFocus={() => onFocus(true)}
        />
      );

    default:
      return (
        <Input
          value={value}
          onChange={(event) => onValueChange(event.target.value as string)}
          onBlur={() => onBlur(false)}
          onFocus={() => onFocus(true)}
        />
      );
  }
};