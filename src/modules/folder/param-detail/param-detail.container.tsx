import i18n from 'i18n';
import React, { useContext, useState } from 'react';

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

import { AhfFolderContext } from '../store/context';
import { AhfParamEditContainer } from './edit/param-edit.container';
import { useParamDetailContainerStyles } from './param-detail.container.styles';

export const AhfParamDetailContainer: React.FC = () => {
  const classes = useParamDetailContainerStyles();
  const { state } = useContext(AhfFolderContext);

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickInput = () => setOpenEdit(true);

  const handleEditClose = () => setOpenEdit(false);

  const param =
    state.currentParamIndex && state.folder.params[state.currentParamIndex];

  return (
    <>
      {param && (
        <>
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
          />
        </>
      )}
    </>
  );
};
