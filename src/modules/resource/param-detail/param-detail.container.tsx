import i18n from 'i18n';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Avatar,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { AccessType, Param } from 'domain/param/param.types';
import { getParamValue, stringToParamValue } from 'domain/param/param.utils';
import { AhfCardFullPageComponent } from 'modules/shared/components/cards/full-page/card-full-page.component';
import { AhfParamEditContainerMemoized } from 'modules/shared/components/param-edit/param-edit.container';
import { useSaveParam } from 'modules/shared/hooks/save-param.hook';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { useParamDetailContainerStyles } from './param-detail.container.styles';

interface Props {
  param: Param;
}

export const AhfParamDetailContainer: React.FC<Props> = ({ param }: Props) => {
  const classes = useParamDetailContainerStyles();
  const { t } = useTranslation();
  const { setNextMarker, setParamToSave, openBackdrop } = useSaveParam();
  const { writeParam } = useSocketHook();

  const [openEditModal, setOpenEditModal] = useState(false);

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  useEffect(() => {
    setParamToSave(param.read);
  }, [setParamToSave, param.read]);

  const handleClickInput = () => {
    param.value !== undefined &&
      param.accessType === AccessType.READ_WRITE &&
      setOpenEditModal(true);
  };

  const handleEditClose = useCallback(() => setOpenEditModal(false), []);

  const handleSave = useCallback(
    (value: string) => {
      setOpenEditModal(false);
      openBackdrop();
      const nextMarker = param.read ? param.read.marker + 1 : undefined;
      if (nextMarker) {
        const paramToUpdate = JSON.parse(JSON.stringify(param));
        if (paramToUpdate.read) {
          paramToUpdate.read.marker = nextMarker;
          paramToUpdate.value = stringToParamValue(value, param.paramType);
          setNextMarker(nextMarker);
          writeParam(paramToUpdate);
        }
      }
    },
    [param, writeParam, openBackdrop, setNextMarker],
  );

  return (
    <>
      <AhfCardFullPageComponent>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar className={classes.avatar} variant="square">
              {param.paramId}
            </Avatar>
          }
          title={
            <Typography variant="h3" className={classes.title}>
              {param.name[currentLanguage]}
            </Typography>
          }
          action={
            param.accessType === AccessType.READ_WRITE && (
              <IconButton aria-label="settings">
                <EditIcon />
              </IconButton>
            )
          }
        ></CardHeader>
        <CardContent>
          <Grid item container>
            <FormControl fullWidth>
              <TextField
                label={t('RESOURCE.PARAM_DETAIL.FIELDS.VALUE.LABEL')}
                value={
                  param.value !== undefined
                    ? `${getParamValue(param, currentLanguage)} ${param.unit}`
                    : ' -- '
                }
                onClick={handleClickInput}
                placeholder=""
                InputProps={{
                  classes: {
                    input: classes.value,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  classes: {
                    root: classes.label,
                  },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item container>
            <FormControl disabled fullWidth>
              <TextField
                className={classes.description}
                label={t('RESOURCE.PARAM_DETAIL.FIELDS.DESCRIPTION.LABEL')}
                value={param.description[currentLanguage]}
                placeholder=""
                multiline
                InputProps={{
                  classes: {
                    input: classes.value,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  classes: {
                    root: classes.label,
                  },
                }}
              />
            </FormControl>
          </Grid>
        </CardContent>
      </AhfCardFullPageComponent>
      {openEditModal && (
        <AhfParamEditContainerMemoized
          avatarTitle={param.paramId.toString()}
          nameTitle={param.name[currentLanguage]}
          type={param.paramType}
          value={param.value?.toString()}
          values={param.paramEnumText[currentLanguage]}
          onClose={handleEditClose}
          onSave={handleSave}
        />
      )}
    </>
  );
};
