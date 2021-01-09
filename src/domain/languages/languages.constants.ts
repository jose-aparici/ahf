import { AhfLanguage } from './languages.types';

export const AHF_LANGUAGES: AhfLanguage[] = [
  {
    position: 0,
    locale: 'de_DE',
    name: 'Deutsche',
  },
  {
    position: 1,
    locale: 'en_EN',
    name: 'English',
  },
  {
    position: 2,
    locale: 'zh-cn',
    name: '中文',
  },
  {
    position: 3,
    locale: 'fr_FR',
    name: 'Français',
  },
];

export const DEFAULT_LANGUAGE = AHF_LANGUAGES[0];
