import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfToasterContext } from 'contexts/toaster/context';
import { useSocketHook } from 'hooks/socket-hook';
import i18n from 'i18n';
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
  Card,
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
import { stringToParamValue } from 'domain/param/param.utils';

import { AhfParamEditContainerMemoized } from './edit/param-edit.container';
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

  const { setShowToaster, setSeverity, setMessage } = useContext(
    AhfToasterContext,
  );

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
      closeBackdrop();
      setNexMarker(param.read.marker);
      setSeverity('success');
      setMessage(t('RESOURCE.PARAM_DETAIL.SAVE.SUCCESS'));
      setShowToaster(true);
    }
  }, [
    nextMarker,
    param.read,
    closeBackdrop,
    isBackdropOpened,
    setSeverity,
    setShowToaster,
    setMessage,
    t,
  ]);

  useEffect(() => {
    if (isBackdropOpened) {
      timeoutIdRef.current = window.setTimeout(() => {
        setSeverity('warning');
        setMessage(t('RESOURCE.PARAM_DETAIL.SAVE.WARNING'));
        closeBackdrop();
        setShowToaster(true);
      }, 5000);

      return () => {
        window.clearTimeout(timeoutIdRef.current);
      };
    }
  }, [
    closeBackdrop,
    isBackdropOpened,
    setSeverity,
    setShowToaster,
    setMessage,
    t,
  ]);

  const handleClickInput = () =>
    param.value &&
    param.accessType === AccessType.READ_WRITE &&
    setOpenEditModal(true);

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
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12}>
          <Card variant="elevation" className={classes.cardContainer}>
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
                      param.value ? `${param.value} ${param.unit}` : ' -- '
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
          </Card>
        </Grid>
      </Grid>
      {openEditModal && (
        <AhfParamEditContainerMemoized
          param={param}
          onClose={handleEditClose}
          onSave={handleSave}
        />
      )}

      {/*   <Snackbar
        open={showToaster}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleToasterClose}
      >
        <Alert elevation={6} variant="filled" severity={toasterSeverity}>
          {toasterSeverity === 'success'
            ? t('RESOURCE.PARAM_DETAIL.SAVE.SUCCESS')
            : t('RESOURCE.PARAM_DETAIL.SAVE.WARNING')}
        </Alert>
      </Snackbar> */}
    </>
  );
};
