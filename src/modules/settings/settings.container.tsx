import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Tab, Tabs } from '@material-ui/core';

import { SETTING_TABS } from 'domain/settings/settings.contants';

import { AhfSettingsEthernetContainer } from './ethernet/settings-ethernet.container';
import { AhfSettingsLanguageContainer } from './language/settings-language.container';
import { AhfSettingsModbusAhfContainer } from './modbus_ahf/settings-modbus-ahf.container';
import { AhfSettingsModbusHmiContainer } from './modbus_hmi/settings-modbus-hmi.container';
import { useSettingsContainerStyles } from './settings.container.styles';
import { AhfSettingsSystemContainer } from './system/settings-system.container';

export const AhfSettingsContainer: React.FC = () => {
  const { t } = useTranslation();
  const classes = useSettingsContainerStyles();
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    tabIndex: number,
  ) => {
    setCurrentTab(tabIndex);
  };
  return (
    <>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        variant="fullWidth"
        classes={{ root: classes.root }}
      >
        {Object.entries(SETTING_TABS).map((tab) => (
          <Tab
            key={tab[1].index}
            classes={{ root: classes.tabRoot, wrapper: classes.tab }}
            label={t(tab[1].label)}
          />
        ))}
      </Tabs>
      {currentTab === SETTING_TABS.SYSTEM.index && (
        <AhfSettingsSystemContainer />
      )}
      {currentTab === SETTING_TABS.MODBUS_HMI.index && (
        <AhfSettingsModbusHmiContainer />
      )}
      {currentTab === SETTING_TABS.MODBUS_AHF.index && (
        <AhfSettingsModbusAhfContainer />
      )}
      {currentTab === SETTING_TABS.ETHERNET.index && (
        <AhfSettingsEthernetContainer />
      )}
      {currentTab === SETTING_TABS.LANGUAGE.index && (
        <AhfSettingsLanguageContainer />
      )}
    </>
  );
};
