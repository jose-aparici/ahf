import React from 'react';

import { FormControl, MenuItem, Select } from '@material-ui/core';

import { AhfLanguage } from 'domain/languages/languages.types';

interface Props {
  currentLanguage: string;
  languages: AhfLanguage[];
  onChangeLanguage: (locale: string) => void;
}

export const AhfLanguageSelectorComponent: React.FC<Props> = ({
  currentLanguage,
  languages,
  onChangeLanguage,
}: Props) => (
  <FormControl>
    <Select
      defaultValue={currentLanguage}
      value={currentLanguage}
      onChange={(event) => onChangeLanguage(event.target.value as string)}
      name="language"
    >
      {languages.map((language) => (
        <MenuItem key={language.locale} value={language.locale}>
          {language.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
