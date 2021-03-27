import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Keyboard from 'react-simple-keyboard';

//import SwipeableViews from 'react-swipeable-views';
import { IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { findParamIndexById } from 'domain/ahf-param/ahf-param.utils';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param, ParamValue } from 'domain/param/param.types';
import { AhfStepperComponent } from 'modules/shared/stepper/stepper.component';

import { useParamsContainerStyles } from './params.container.styles';

interface Props {
  deviceId: string;
  folderName: string;
  paramId: string;
  params: Param[];
}

type CurrentParam = {
  index: number;
  param: Param;
};

export const AhfParamsContainer: React.FC<Props> = ({
  params,
  paramId,
}: Props) => {
  const { i18n } = useTranslation();
  const classes = useParamsContainerStyles();

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language);

  const history = useHistory();
  const keyboard = useRef<Keyboard>();

  const [currentParam, setCurrentParam] = useState<CurrentParam>(() => {
    const index = findParamIndexById(params, paramId);
    return { index, param: { ...params[index] } };
  });
  const [value, setValue] = useState<ParamValue>(
    currentParam.param.value || '',
  );
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleParamChange = (paramIndex: number) => {
    setCurrentParam({
      index: paramIndex,
      param: params[paramIndex],
    });
    const paramId = params[paramIndex].paramId;
    history.replace(
      history.location.pathname.replace(/[^]*$/, paramId.toString()),
    );
  };
  const handleValueChange = (value: string) => {
    setValue(value);
    if (keyboard && keyboard.current) {
      keyboard.current.setInput(value);
    }
  };

  const handleNextParam = (): void => handleParamChange(currentParam.index + 1);
  const handlePreviousParam = (): void =>
    handleParamChange(currentParam.index - 1);

  const handleClose = (): void => history.goBack();
  const handleToggleKeyboard = (showKeyboard: boolean): void =>
    setShowKeyboard(showKeyboard);

  return (
    <>
      <IconButton
        aria-label="cancel"
        className={classes.closeButton}
        onClick={handleClose}
      >
        <HighlightOffIcon />
      </IconButton>
      <AhfStepperComponent
        totalSteps={params.length}
        currentStep={currentParam.index}
        onNext={handleNextParam}
        onBack={handlePreviousParam}
      />
      {/* <SwipeableViews
        enableMouseEvents
        onChangeIndex={handleParamChange}
        index={currentParam.index}
      >
        {params.map((param, paramIndex) => {
          return paramIndex === currentParam.index ? (
            <React.Fragment key={param.paramId}>
              <AhfParamDetailComponent
                key={param.paramId}
                param={param}
                value={value}
                onValueChange={handleValueChange}
                onToggleKeyboard={handleToggleKeyboard}
                language={currentLanguage.position}
              />
              {showKeyboard && (
                <AhfVirtualKeyboardComponent
                  keyboardRef={keyboard}
                  onChange={setValue}
                  layout={
                    param.paramType === 'number'
                      ? LAYOUTS[LAYOUT_TYPE.NUMERIC]
                      : LAYOUTS[currentLanguage.keyboard]
                  }
                />
              )}
            </React.Fragment>
          ) : (
            <React.Fragment key={param.paramId}></React.Fragment>
          );
        })}
      </SwipeableViews> */}
    </>
  );
};
