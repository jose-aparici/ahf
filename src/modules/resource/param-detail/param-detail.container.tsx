import { useSocketHook } from 'hooks/socket-hook';
import i18n from 'i18n';
import React, { useEffect, useState } from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from '@material-ui/core';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param } from 'domain/param/param.types';
import { AhfSpinnerComponent } from 'modules/shared/spinner/spinner.component';

import { AhfParamEditContainer } from './edit/param-edit.container';
import { useParamDetailContainerStyles } from './param-detail.container.styles';

interface Props {
  param: Param;
}

export const AhfParamDetailContainer: React.FC<Props> = ({ param }: Props) => {
  const classes = useParamDetailContainerStyles();
  const { writeParam } = useSocketHook();

  const [openEdit, setOpenEdit] = useState(false);
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

  const handleClickInput = () => setOpenEdit(true);

  const handleEditClose = () => setOpenEdit(false);

  const handleSave = (value: string) => {
    setOpenEdit(false);
    setOpenSpinner(true);
    const nextMarker = param.read ? param.read.marker + 1 : undefined;
    if (param.read && nextMarker) {
      param.read.marker = nextMarker;
      param.value = value;
      setNexMarker(nextMarker);
      writeParam(param);
    }
  };

  return (
    <>
      {
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
                      <InputLabel disabled={true}>Value</InputLabel>
                      <Input
                        value={param.value}
                        type="string"
                        onClick={handleClickInput}
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
          <AhfParamEditContainer
            param={param}
            isOpen={openEdit}
            onClose={handleEditClose}
            onSave={handleSave}
          />
        </>
      }
    </>
  );
};
