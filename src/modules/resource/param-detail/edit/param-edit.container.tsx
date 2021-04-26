import i18n from 'i18n';
import React, { MutableRefObject, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Keyboard from 'react-simple-keyboard';

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  Grid,
  GridList,
  Typography,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param, ParamError, ParamType } from 'domain/param/param.types';
import {
  isKeyboardType,
  isNumericType,
  validateValue,
} from 'domain/param/param.utils';
import {
  LAYOUT_TYPE,
  LAYOUTS,
} from 'domain/virtual-keyboard/virtual-keyboard.constants';
import { AhfVirtualKeyboardComponent } from 'modules/shared/virtual-keyboard/virtual-keyboard.component';

import { AhfParamEditFieldComponent } from './components/field/param-edit-field.component';
import { useParamEditContainerStyles } from './param-edit.container.styles';

interface Props {
  param: Param;
  onClose: () => void;
  onSave: (value: string) => void;
}

const AhfParamEditContainer: React.FC<Props> = ({
  param,
  onClose,
  onSave,
}: Props) => {
  const classes = useParamEditContainerStyles();
  const { t } = useTranslation();

  const keyboardRef = useRef<Keyboard>(null);

  const [input, setInput] = useState(() => {
    if (param.paramType === ParamType.ENUM) {
      return param.paramEnumText
        .findIndex((item) => item === param.value)
        .toString();
    }

    return param.value as string;
  });
  const [error, setError] = useState<ParamError | undefined>(undefined);

  const handleParamChange = (value: string) => {
    setInput(value);
    setError(validateValue(param.paramType, value));
  };
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const handleValueFocus = (value: string) => {
    setError(validateValue(param.paramType, value));
  };

  const handleEnter = () => !error && onSave(input);

  return (
    <Dialog
      open={true}
      onClose={onClose}
      classes={{ paper: classes.dialogContainer }}
    >
      <Grid container className={classes.mainGrid}>
        <Grid item xs className={classes.leftGrid}>
          <div className={classes.leftContainer}>
            <DialogTitle className={classes.title}>
              <Typography variant="h2">
                {param.name[currentLanguage]}
              </Typography>

              {error && (
                <Typography variant="body1" className={classes.error}>
                  {t(error.text)}
                </Typography>
              )}
            </DialogTitle>

            <DialogActions className={classes.buttons}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<CancelIcon />}
                onClick={onClose}
              >
                {t('RESOURCE.PARAM_DETAIL.EDIT.BUTTONS.CANCEL')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleEnter}
              >
                {t('RESOURCE.PARAM_DETAIL.EDIT.BUTTONS.SAVE')}
              </Button>
            </DialogActions>
          </div>
        </Grid>
        <Grid item xs className={classes.rightGrid}>
          {param.paramType === ParamType.ENUM && (
            <GridList cols={1} className={classes.gridList}>
              <FormControl
                style={{ height: '100%' }}
                className={classes.formControl}
              >
                <AhfParamEditFieldComponent
                  type={param.paramType}
                  value={input}
                  values={param.paramEnumText}
                  error={error}
                  onFocus={handleValueFocus}
                  onChange={handleParamChange}
                />
              </FormControl>
            </GridList>
          )}
          {param.paramType !== ParamType.ENUM && (
            <>
              <FormControl fullWidth>
                <AhfParamEditFieldComponent
                  type={param.paramType}
                  value={input}
                  values={param.paramEnumText}
                  error={error}
                  onFocus={handleValueFocus}
                  onChange={handleParamChange}
                />
              </FormControl>
              {isKeyboardType(param.paramType) && (
                <AhfVirtualKeyboardComponent
                  keyboardRef={keyboardRef as MutableRefObject<Keyboard>}
                  layout={
                    isNumericType(param.paramType)
                      ? LAYOUTS[LAYOUT_TYPE.NUMERIC]
                      : LAYOUTS.ENGLISH
                  }
                  onChange={handleParamChange}
                  onEnter={handleEnter}
                  input={input}
                />
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Dialog>
  );
};

export const AhfParamEditContainerMemoized = React.memo(AhfParamEditContainer);
