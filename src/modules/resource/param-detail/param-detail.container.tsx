import { useSocketHook } from 'hooks/socket-hook';
import i18n from 'i18n';
import React, { useContext, useEffect, useState } from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

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
  const { writeParam } = useSocketHook();
  const { resourceState } = useContext(AhfResourceContext);
  const {
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
  } = useParamNavigation(resourceState.folder, param);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openSpinner, setOpenSpinner] = useState(false);
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
    }
  }, [openSpinner, nextMarker, param.read]);

  const handleClickInput = () =>
    param.accessType === AccessType.READ_WRITE &&
    param.value &&
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
            ></CardHeader>
            <CardContent>
              <Grid item container>
                <FormControl fullWidth>
                  <TextField
                    disabled
                    label="Value"
                    value={
                      param.value ? `${param.value} ${param.unit}` : ' -- '
                    }
                    onClick={handleClickInput}
                    className={
                      param.accessType === AccessType.READ_WRITE
                        ? classes.value
                        : ''
                    }
                    placeholder=""
                    InputLabelProps={{
                      disabled: param.accessType === AccessType.READ_ONLY,
                      shrink: true,
                      classes: { root: classes.valueLabel },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item container>
                <FormControl disabled fullWidth>
                  <TextField
                    disabled
                    className={classes.description}
                    label="Description"
                    defaultValue={param.description}
                    placeholder=""
                    multiline
                    InputLabelProps={{
                      disabled: true,
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
    </>
  );
};
