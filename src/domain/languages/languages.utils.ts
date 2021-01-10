import { DEFAULT_LANGUAGE } from './languages.constants';
import { AhfLanguage } from './languages.types';

export const findLanguageByLocale = (
  languages: AhfLanguage[],
  currentLocale: string,
): AhfLanguage =>
  languages.find((language) => language.locale === currentLocale) ||
  DEFAULT_LANGUAGE;
