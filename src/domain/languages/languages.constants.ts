import { LAYOUT_TYPE } from 'domain/virtual-keyboard/virtual-keyboard.constants';

import { AhfLanguage } from './languages.types';

export const AHF_LANGUAGES: AhfLanguage[] = [
  {
    position: 0,
    locale: 'de_DE',
    name: 'Deutsch',
    keyboard: LAYOUT_TYPE.GERMAN,
  },
  {
    position: 1,
    locale: 'en_EN',
    name: 'English',
    keyboard: LAYOUT_TYPE.ENGLISH,
  },
  {
    position: 2,
    locale: 'zh-cn',
    name: '中文',
    keyboard: LAYOUT_TYPE.CHINESE,
  },
  {
    position: 3,
    locale: 'fr_FR',
    name: 'Français',
    keyboard: LAYOUT_TYPE.FRENCH,
  },
];

export const DEFAULT_LANGUAGE = AHF_LANGUAGES[0];
