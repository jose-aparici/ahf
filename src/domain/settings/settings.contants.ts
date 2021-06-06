import { Tab } from './setting.types';

export const SETTING_TABS: Record<string, Tab> = {
  SYSTEM: { index: 0, label: 'SETTINGS.TABS.SYSTEM.LABEL' },
  MODBUS_HMI: { index: 1, label: 'SETTINGS.TABS.MODBUS_HMI.LABEL' },
  MODBUS_AHF: { index: 2, label: 'SETTINGS.TABS.MODBUS_AHF.LABEL' },
  ETHERNET: { index: 3, label: 'SETTINGS.TABS.ETHERNET.LABEL' },
  LANGUAGE: { index: 4, label: 'SETTINGS.TABS.LANGUAGE.LABEL' },
};

export const SETTINGS_DEVICE_ID = 9999;
