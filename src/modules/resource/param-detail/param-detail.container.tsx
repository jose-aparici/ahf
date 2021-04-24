import { useSocketHook } from 'hooks/socket-hook';
import i18n from 'i18n';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Alert, { Color } from '@material-ui/lab/Alert';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { AccessType, Param } from 'domain/param/param.types';
import { AhfNavigationNextComponent } from 'modules/shared/navigation-next/navigation-next.component';
import { AhfNavigationPreviousComponent } from 'modules/shared/navigation-previous/navigation-previous.component';
import { AhfSpinnerComponent } from 'modules/shared/spinner/spinner.component';

import { AhfResourceContext } from '../store/context';
import { AhfParamEditContainer } from './edit/param-edit.container';
import { useParamDetailContainerStyles } from './param-detail.container.styles';
import { useParamNavigation } from './param-navigation.hook';

interface Props {
  param: Param;
}

export const AhfParamDetailContainer: React.FC<Props> = ({ param }: Props) => {
  const classes = useParamDetailContainerStyles();
  const { t } = useTranslation();
  const { writeParam } = useSocketHook();
  const { resourceState } = useContext(AhfResourceContext);
  const {
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
  } = useParamNavigation(resourceState.folder, param);

  const timeoutIdRef = useRef<number>();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openSpinner, setOpenSpinner] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [toasterSeverity, setToasterSeverity] = useState<Color>();
  const [nextMarker, setNexMarker] = useState(param.read?.marker);

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  useEffect(() => {
    if (
      openSpinner &&
      nextMarker &&
      param.read &&
      param.read?.marker >= nextMarker
    ) {
      setOpenSpinner(false);
      setNexMarker(param.read.marker);
      setToasterSeverity('success');
      setShowToaster(true);
    }
  }, [openSpinner, nextMarker, param.read]);

  useEffect(() => {
    if (openSpinner) {
      timeoutIdRef.current = window.setTimeout(() => {
        setToasterSeverity('warning');
        setOpenSpinner(false);
        setShowToaster(true);
      }, 5000);

      return () => {
        window.clearTimeout(timeoutIdRef.current);
      };
    }
  }, [openSpinner]);

  const handleClickInput = () =>
    param.value &&
    param.accessType === AccessType.READ_WRITE &&
    setOpenEditModal(true);

  const handleEditClose = () => setOpenEditModal(false);

  const handleSave = (value: string) => {
    setOpenEditModal(false);
    setOpenSpinner(true);
    const nextMarker = param.read ? param.read.marker + 1 : undefined;
    if (nextMarker) {
      const paramToUpdate = JSON.parse(JSON.stringify(param));
      if (paramToUpdate.read) {
        paramToUpdate.read.marker = nextMarker;
        paramToUpdate.value = value;
        setNexMarker(nextMarker);
        writeParam(paramToUpdate);
      }
    }
  };

  const handleToasterClose = () => setShowToaster(false);

  return (
    <>
      <AhfSpinnerComponent open={openSpinner} />
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12}>
          <Card variant="elevation" className={classes.cardContainer}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar} variant="square">
                  {param.paramId}
                </Avatar>
              }
              title={
                <Typography variant="h5">
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
                    label="Value"
                    value={
                      param.value ? `${param.value} ${param.unit}` : ' -- '
                    }
                    onClick={handleClickInput}
                    placeholder=""
                    InputLabelProps={{
                      shrink: true,
                      classes: {
                        root: classes.valueLabel,
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item container>
                <FormControl disabled fullWidth>
                  <TextField
                    className={classes.description}
                    label="Description"
                    defaultValue={param.description[currentLanguage]}
                    placeholder=""
                    multiline
                    InputLabelProps={{
                      shrink: true,
                      classes: {
                        root: classes.valueLabel,
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
        <AhfParamEditContainer
          param={param}
          onClose={handleEditClose}
          onSave={handleSave}
        />
      )}
      {hasPrevious && (
        <AhfNavigationPreviousComponent onPrevious={handlePrevious} />
      )}
      {hasNext && <AhfNavigationNextComponent onNext={handleNext} />}
      <Snackbar
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
      </Snackbar>
    </>
  );
};
