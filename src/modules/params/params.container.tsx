import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Keyboard from 'react-simple-keyboard';
import SwipeableViews from 'react-swipeable-views';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param, Value } from 'domain/param/param.types';
import { findParamIndexById } from 'domain/param/param.utils';
import {
  LAYOUT_TYPE,
  LAYOUTS,
} from 'domain/virtual-keyboard/virtual-keyboard.constants';
import { AhfStepperComponent } from 'modules/shared/stepper/stepper.component';
import { AhfVirtualKeyboardComponent } from 'modules/shared/virtual-keyboard/virtual-keyboard.component';

import { AhfParamDetailComponent } from './param-detail/param-detail.component';

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

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language);

  const history = useHistory();
  const keyboard = useRef<Keyboard>();

  const [currentParam, setCurrentParam] = useState<CurrentParam>(() => {
    const index = findParamIndexById(params, paramId);
    return { index, param: { ...params[index] } };
  });
  const [value, setValue] = useState<Value>(currentParam.param.Value || '');

  const handleParamChange = (paramIndex: number) => {
    setCurrentParam({
      index: paramIndex,
      param: params[paramIndex],
    });
    const paramId = params[paramIndex].ParamID;
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

  return (
    <>
      <AhfStepperComponent
        totalSteps={params.length}
        currentStep={currentParam.index}
        onNext={handleNextParam}
        onBack={handlePreviousParam}
      />
      <SwipeableViews
        enableMouseEvents
        onChangeIndex={handleParamChange}
        index={currentParam.index}
      >
        {params.map((param, paramIndex) => {
          return paramIndex === currentParam.index ? (
            <React.Fragment key={param.ParamID}>
              <AhfParamDetailComponent
                key={param.ParamID}
                param={param}
                value={value}
                onValueChange={handleValueChange}
                language={currentLanguage.position}
              />
              <AhfVirtualKeyboardComponent
                keyboardRef={keyboard}
                onChange={setValue}
                layout={
                  param.ParamType === 'number'
                    ? LAYOUTS[LAYOUT_TYPE.NUMERIC]
                    : LAYOUTS[currentLanguage.keyboard]
                }
              />
            </React.Fragment>
          ) : (
            <React.Fragment key={param.ParamID}></React.Fragment>
          );
        })}
      </SwipeableViews>
    </>
  );
};
