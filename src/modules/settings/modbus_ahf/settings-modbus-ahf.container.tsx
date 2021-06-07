import React from 'react';

import {
  CardContent,
  CardHeader,
  FormControl,
  TextField,
} from '@material-ui/core';

import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';

import { useSettingsModbusAhfContainerStyles } from './settings-modbus-ahf.container.styles';

export const AhfSettingsModbusAhfContainer: React.FC = () => {
  const classes = useSettingsModbusAhfContainerStyles();
  return (
    <AhfCardFullPageComponent minHeight="70vh">
      <CardHeader />
      <CardContent>
        <FormControl fullWidth>
          <TextField
            label="label"
            value="value"
            onClick={() => 0}
            placeholder=""
            InputLabelProps={{
              shrink: true,
              classes: {
                root: classes.label,
              },
            }}
          />
        </FormControl>
      </CardContent>
    </AhfCardFullPageComponent>
  );
};
