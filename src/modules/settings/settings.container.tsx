import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Tab, Tabs } from '@material-ui/core';

import { SETTING_TABS } from 'domain/settings/settings.contants';

import { AhfSettingsEthernetComponent } from './ethernet/settings-ethernet.conmponent';
import { AhfSettingsLanguageComponent } from './language/settings-language.conmponent';
import { AhfSettingsModbusAhfComponent } from './modbus_ahf/settings-modbus-ahf.conmponent';
import { AhfSettingsModbusHmiComponent } from './modbus_hmi/settings-modbus-hmi.conmponent';
import { useSettingsContainerStyles } from './settings.container.styles';
import { AhfSettingsSystemComponent } from './system/settings-system.conmponent';

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
        <AhfSettingsSystemComponent />
      )}
      {currentTab === SETTING_TABS.MODBUS_HMI.index && (
        <AhfSettingsModbusHmiComponent />
      )}
      {currentTab === SETTING_TABS.MODBUS_AHF.index && (
        <AhfSettingsModbusAhfComponent />
      )}
      {currentTab === SETTING_TABS.ETHERNET.index && (
        <AhfSettingsEthernetComponent />
      )}
      {currentTab === SETTING_TABS.LANGUAGE.index && (
        <AhfSettingsLanguageComponent />
      )}
    </>
  );
};
