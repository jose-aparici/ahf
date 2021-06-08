import React, { useCallback, useEffect, useRef, useState } from 'react';

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
import { stringToParamValue } from 'domain/param/param.utils';
import {
  INITIAL_MARKER,
  SETTINGS_DEVICE_ID,
} from 'domain/settings/settings.contants';
import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';
import { useSaveParam } from 'modules/shared/hooks/save-param.hook';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

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
  const { setNextMarker, setParamToSave, openBackdrop } = useSaveParam();
  const currentMarker = useRef<number>(INITIAL_MARKER);

  const { writeParam } = useSocketHook();

  useEffect(() => {
    if (selectedParam && selectedParam.read) {
      setParamToSave(selectedParam.read);
    }
  }, [setParamToSave, selectedParam]);

  const handleClickInput = (param: Param) => {
    if (
      param.value !== undefined &&
      param.accessType === AccessType.READ_WRITE
    ) {
      setSelectedParam(param);
    }
  };

  const handleSave = useCallback(
    (value: string) => {
      if (selectedParam) {
        const paramToUpdate = selectedParam;
        paramToUpdate.read = {
          deviceId: SETTINGS_DEVICE_ID,
          folderName: '',
          marker: currentMarker.current,
          paramPos: 0,
        };
        setSelectedParam(undefined);
        openBackdrop();
        debugger;

        if (paramToUpdate.read) {
          paramToUpdate.value = stringToParamValue(
            value,
            paramToUpdate.paramType,
          );
          setNextMarker(currentMarker.current);
          writeParam(paramToUpdate);
          currentMarker.current = currentMarker.current + 1;
        }
      }
    },
    [selectedParam, writeParam, openBackdrop, currentMarker, setNextMarker],
  );

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
          onSave={handleSave}
        />
      )}
    </>
  );
};
