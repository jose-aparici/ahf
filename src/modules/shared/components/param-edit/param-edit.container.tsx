import React, { MutableRefObject, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Keyboard from 'react-simple-keyboard';

import {
  Avatar,
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

import { ParamError, ParamType, ParamValue } from 'domain/param/param.types';
import {
  isKeyboardType,
  isNumericKeyboardType,
  validateValue,
} from 'domain/param/param.utils';
import {
  LAYOUT_TYPE,
  LAYOUTS,
} from 'domain/virtual-keyboard/virtual-keyboard.constants';

import { AhfVirtualKeyboardComponent } from '../virtual-keyboard/virtual-keyboard.component';
import { AhfParamEditFieldComponent } from './components/field/param-edit-field.component';
import { useParamEditContainerStyles } from './param-edit.container.styles';

interface Props {
  avatarTitle?: string;
  nameTitle?: string;
  button1Text?: string;
  button2Text?: string;
  value: ParamValue;
  values?: string[];
  type: ParamType;
  onClose: () => void;
  onSave: (value: string) => void;
}

const AhfParamEditContainer: React.FC<Props> = ({
  avatarTitle,
  nameTitle,
  button1Text = 'RESOURCE.PARAM_DETAIL.EDIT.BUTTONS.CANCEL',
  button2Text = 'RESOURCE.PARAM_DETAIL.EDIT.BUTTONS.SAVE',
  value,
  values = [],
  type,
  onClose,
  onSave,
}: Props) => {
  const classes = useParamEditContainerStyles();
  const { t } = useTranslation();

  const keyboardRef = useRef<typeof Keyboard>(null);

  const [input, setInput] = useState(() => {
    return value ? value.toString() : '';
  });
  const [error, setError] = useState<ParamError | undefined>(undefined);

  const handleParamChange = (value: string) => {
    setInput(value);
    setError(validateValue(type, value));
  };

  const handleValueFocus = (value: string) => {
    setError(validateValue(type, value));
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
            <DialogTitle className={classes.title} disableTypography>
              {avatarTitle && (
                <Avatar variant="square" className={classes.avatar}>
                  {avatarTitle}
                </Avatar>
              )}
              {nameTitle && (
                <Typography variant="h2" display="inline">
                  {nameTitle}
                </Typography>
              )}
            </DialogTitle>

            {isKeyboardType(type) && (
              <div className={classes.keyboardContainer}>
                <FormControl fullWidth>
                  <AhfParamEditFieldComponent
                    type={type}
                    value={input}
                    values={values}
                    error={error}
                    onFocus={handleValueFocus}
                    onChange={handleParamChange}
                  />
                </FormControl>
                <AhfVirtualKeyboardComponent
                  keyboardRef={keyboardRef as MutableRefObject<unknown>}
                  layout={
                    isNumericKeyboardType(type)
                      ? LAYOUTS[LAYOUT_TYPE.NUMERIC]
                      : LAYOUTS.ENGLISH
                  }
                  onChange={handleParamChange}
                  onEnter={handleEnter}
                  input={input}
                />
              </div>
            )}

            <DialogActions className={classes.buttons}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<CancelIcon />}
                onClick={onClose}
              >
                {t(button1Text)}
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleEnter}
              >
                {t(button2Text)}
              </Button>
            </DialogActions>
          </div>
        </Grid>

        {type === ParamType.ENUM && (
          <Grid item xs className={classes.rightGrid}>
            {type === ParamType.ENUM && (
              <GridList cols={1} className={classes.gridList}>
                <FormControl
                  style={{ height: '100%' }}
                  className={classes.formControl}
                >
                  <AhfParamEditFieldComponent
                    type={type}
                    value={input}
                    values={values}
                    error={error}
                    onFocus={handleValueFocus}
                    onChange={handleParamChange}
                  />
                </FormControl>
              </GridList>
            )}
          </Grid>
        )}
        {type === ParamType.DATE && (
          <FormControl fullWidth>
            <AhfParamEditFieldComponent
              type={type}
              value={input}
              values={values}
              error={error}
              onFocus={handleValueFocus}
              onChange={handleParamChange}
            />
          </FormControl>
        )}
      </Grid>
    </Dialog>
  );
};

export const AhfParamEditContainerMemoized = React.memo(AhfParamEditContainer);
