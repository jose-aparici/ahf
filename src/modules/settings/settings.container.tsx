import React from 'react';
import { useTranslation } from 'react-i18next';

import { Tab, Tabs } from '@material-ui/core';

import { SETTING_TABS } from 'domain/settings/settings.contants';

import { useSettingsContainerStyles } from './setting.container.styles';

export const AhfSettingsContainer: React.FC = () => {
  const { t } = useTranslation();
  const classes = useSettingsContainerStyles();
  return (
    <Tabs
      value={0}
      onChange={() => 0}
      variant="fullWidth"
      classes={{ root: classes.root }}
    >
      {SETTING_TABS.map((tab) => (
        <Tab
          key={tab.label}
          classes={{ root: classes.tabRoot, wrapper: classes.tab }}
          label={t(tab.label)}
        />
      ))}
    </Tabs>
  );
};
