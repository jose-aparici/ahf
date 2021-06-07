import React from 'react';

import {
  CardContent,
  CardHeader,
  FormControl,
  TextField,
} from '@material-ui/core';

import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';

import { useSettingsEthernetContainerStyles } from './settings-ethernet.container.styles';

export const AhfSettingsEthernetContainer: React.FC = () => {
  const classes = useSettingsEthernetContainerStyles();
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
