import React from 'react';
import { useTranslation } from 'react-i18next';

import { Tab, Tabs } from '@material-ui/core';

import { SETTING_TABS } from 'domain/settings/settings.contants';

export const AhfSettingsContainer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Tabs value={0} onChange={() => 0}>
      {SETTING_TABS.map((tab) => (
        <Tab key={tab.label} label={t(tab.label)} />
      ))}
    </Tabs>
  );
};
