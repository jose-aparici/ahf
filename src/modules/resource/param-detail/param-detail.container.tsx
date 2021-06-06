import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfToasterContext } from 'contexts/toaster/context';
import { useSocketHook } from 'hooks/socket-hook';
import i18n from 'i18n';
import i18next from 'i18next';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
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
import { Severity } from 'domain/notification/notification.types';
import { AccessType, Param } from 'domain/param/param.types';
import { getParamValue, stringToParamValue } from 'domain/param/param.utils';
import { AhfCardFullPageComponent } from 'modules/shared/cards/full-page/card-full-page.component';

import { AhfParamEditContainerMemoized } from '../../shared/param-edit/param-edit.container';
import { useParamDetailContainerStyles } from './param-detail.container.styles';

interface Props {
  param: Param;
}

export const AhfParamDetailContainer: React.FC<Props> = ({ param }: Props) => {
  const classes = useParamDetailContainerStyles();
  const { t } = useTranslation();
  const { writeParam } = useSocketHook();
  const { isBackdropOpened, openBackdrop, closeBackdrop } = useContext(
    AhfBackdropContext,
  );

  const { displayNotification } = useContext(AhfToasterContext);

  const timeoutIdRef = useRef<number>();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [nextMarker, setNexMarker] = useState(param.read?.marker);

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  useEffect(() => {
    if (
      isBackdropOpened &&
      nextMarker &&
      param.read &&
      param.read?.marker >= nextMarker
    ) {
      if (
        param.paramId === 200 &&
        i18next.language !== AHF_LANGUAGES[param.value as number].locale
      ) {
        i18next.changeLanguage(AHF_LANGUAGES[param.value as number].locale);
      }
      closeBackdrop();
      setNexMarker(param.read.marker);
      displayNotification({
        text: t('RESOURCE.PARAM_DETAIL.SAVE.SUCCESS'),
        severity: Severity.SUCCESS,
      });
    }
  }, [
    nextMarker,
    param.read,
    closeBackdrop,
    isBackdropOpened,
    displayNotification,
    param.value,
    param.paramId,
    t,
  ]);

  useEffect(() => {
    if (isBackdropOpened) {
      timeoutIdRef.current = window.setTimeout(() => {
        closeBackdrop();
        displayNotification({
          text: t('RESOURCE.PARAM_DETAIL.SAVE.WARNING'),
          severity: Severity.WARNING,
        });
      }, 5000);

      return () => {
        window.clearTimeout(timeoutIdRef.current);
      };
    }
  }, [closeBackdrop, isBackdropOpened, displayNotification, t]);

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
          setNexMarker(nextMarker);
          writeParam(paramToUpdate);
        }
      }
    },
    [param, writeParam, openBackdrop],
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
