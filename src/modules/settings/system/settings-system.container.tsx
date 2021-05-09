import React from 'react';

import {
  CardContent,
  CardHeader,
  FormControl,
  TextField,
} from '@material-ui/core';

import { AhfCardFullPageComponent } from 'modules/shared/cards/full-page/card-full-page.component';

import { useSettingsSystemContainerStyles } from './settings-system.container.styles';

export const AhfSettingsSystemContainer: React.FC = () => {
  const classes = useSettingsSystemContainerStyles();
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
