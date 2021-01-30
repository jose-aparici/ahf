import i18n from 'i18n';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Param, Value } from 'domain/param/param.types';
import { findParamIndexById } from 'domain/param/param.utils';
import { AhfStepperComponent } from 'modules/shared/stepper/stepper.component';

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
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const history = useHistory();

  const [currentParam, setCurrentParam] = useState<CurrentParam>(() => {
    const index = findParamIndexById(params, paramId);
    return { index, param: { ...params[index] } };
  });
  const [value, setValue] = useState<Value>(currentParam.param.Value);

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
            <AhfParamDetailComponent
              key={param.ParamID}
              param={param}
              value={value}
              onValueChange={handleValueChange}
              language={currentLanguage}
            ></AhfParamDetailComponent>
          ) : (
            <React.Fragment key={param.ParamID}></React.Fragment>
          );
        })}
      </SwipeableViews>
    </>
  );
};
