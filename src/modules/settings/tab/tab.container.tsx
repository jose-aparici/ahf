import i18next from 'i18next';
import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  TextField,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { Folder } from 'domain/folder/folder.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { AccessType, Param, ParamRead } from 'domain/param/param.types';
import { getParamValue, stringToParamValue } from 'domain/param/param.utils';
import { SETTINGS_DEVICE_ID } from 'domain/settings/settings.contants';
import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';
import { useSaveParam } from 'modules/shared/hooks/save-param.hook';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { useTabContainerStyles } from './tab.container.styles';

interface Props {
  tab: Folder;
  currentLanguage: number;
  initialMarker: MutableRefObject<number>;
  settingToEdit?: ParamRead;
}

export const AhfTabContainer: React.FC<Props> = ({
  tab,
  currentLanguage,
  initialMarker,
  settingToEdit,
}: Props) => {
  const classes = useTabContainerStyles();
  const [selectedParam, setSelectedParam] = useState<Param | undefined>();
  const { setNextMarker, setParamToSave, openBackdrop } = useSaveParam();

  const { writeParam } = useSocketHook();

  useEffect(() => {
    if (settingToEdit) {
      setParamToSave(settingToEdit);
    }
  }, [setParamToSave, settingToEdit]);

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
          marker: initialMarker.current,
          paramPos: 0,
        };
        setSelectedParam(undefined);
        openBackdrop();

        if (paramToUpdate.read) {
          paramToUpdate.value = stringToParamValue(
            value,
            paramToUpdate.paramType,
          );
          setNextMarker(initialMarker.current);
          writeParam(paramToUpdate);
          initialMarker.current = initialMarker.current + 1;
          if (
            paramToUpdate.paramId === 200 &&
            i18next.language !==
              AHF_LANGUAGES[paramToUpdate.value as number].locale
          ) {
            i18next.changeLanguage(
              AHF_LANGUAGES[paramToUpdate.value as number].locale,
            );
          }
        }
      }
    },
    [selectedParam, writeParam, openBackdrop, initialMarker, setNextMarker],
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
                      value={
                        param.value !== undefined
                          ? `${getParamValue(param, currentLanguage)} ${
                              param.unit
                            }`
                          : ' -- '
                      }
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
