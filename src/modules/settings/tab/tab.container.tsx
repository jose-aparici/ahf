import React, { useState } from 'react';

import {
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  TextField,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { Folder } from 'domain/folder/folder.types';
import { AccessType, Param } from 'domain/param/param.types';
import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';

import { useTabContainerStyles } from './tab.container.styles';

interface Props {
  tab: Folder;
  currentLanguage: number;
}

export const AhfTabContainer: React.FC<Props> = ({
  tab,
  currentLanguage,
}: Props) => {
  const classes = useTabContainerStyles();
  const [selectedParam, setSelectedParam] = useState<Param | undefined>();

  const handleClickInput = (param: Param) => {
    if (
      param.value !== undefined &&
      param.accessType === AccessType.READ_WRITE
    ) {
      setSelectedParam(param);
    }
  };

  const handleEditClose = () => setSelectedParam(undefined);

  return (
    <>
      <AhfCardFullPageComponent minHeight="70vh">
        <CardHeader />
        <CardContent>
          <Grid container spacing={3}>
            {tab.params.map((param) => {
              return (
                <Grid key={param.paramId} item xs={4}>
                  <FormControl fullWidth>
                    <TextField
                      label={
                        <div className={classes.labelContainer}>
                          <div>{param.name[currentLanguage]}</div>
                          {param.accessType === AccessType.READ_WRITE && (
                            <EditIcon className={classes.labelIcon} />
                          )}
                        </div>
                      }
                      value={param.value}
                      onClick={() => handleClickInput(param)}
                      placeholder=""
                      InputLabelProps={{
                        shrink: true,
                        classes: {
                          root: classes.label,
                        },
                      }}
                    />
                  </FormControl>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </AhfCardFullPageComponent>
      {selectedParam && (
        <AhfParamEditContainerMemoized
          avatarTitle={selectedParam.paramId.toString()}
          nameTitle={selectedParam.name[currentLanguage]}
          type={selectedParam.paramType}
          value={selectedParam.value?.toString()}
          values={selectedParam.paramEnumText[currentLanguage]}
          onClose={handleEditClose}
          onSave={() => 0}
        />
      )}
    </>
  );
};
