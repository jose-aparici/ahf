import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LANGUAGE } from 'domain/languages/languages.constants';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: DEFAULT_LANGUAGE.locale,
    fallbackLng: DEFAULT_LANGUAGE.locale,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
