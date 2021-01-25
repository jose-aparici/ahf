import i18n from 'i18n';
import React, { useState } from 'react';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Value } from 'domain/param/param.types';

import { AhfParamDetailComponent } from './param-detail/param-detail.component';

interface Props {
  deviceId: string;
  folderId: string;
  paramId: string;
}

export const AhfParamContainer: React.FC<Props> = () => {
  const initParam = {
    AccessType: 'READ_ONLY',
    Description: [
      'Momentanwert der verketteten Netzspannung U12 ',
      'Instantaneous value of line to line voltage U12',
      'Instantaneous value of line to line voltage U12',
      'Valeur instantanée tension secteur U12',
    ],
    Name: [
      'Netzspannung U12',
      'Line voltage U12',
      '相瞬时电压 U12',
      'Tension sect U12',
    ],
    ParamEnumNumb: 4,
    ParamEnumText: ['OK', 'Error', 'Too high', 'Too low'],
    ParamID: 113,
    ParamType: 'string',
    Unit: 'V',
    Value: 1103.42,
  };

  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const [value, setValue] = useState<Value>(initParam.Value);

  const handleValueChange = (value: string) => {
    console.log('entra', value);
    setValue(value);
  };

  return (
    <>
      {initParam && (
        <AhfParamDetailComponent
          param={initParam}
          value={value}
          onValueChange={handleValueChange}
          language={currentLanguage}
        ></AhfParamDetailComponent>
      )}
    </>
  );
};
