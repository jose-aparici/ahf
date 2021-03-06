export const DEVICES = 'devices';
export const FOLDER = 'folder';
export const PARAM = 'param';
export const EVENTS = 'events';
export const SETTINGS = 'settings';
export const SETTINGS_ADMIN = 'settings-admin';

export const AppRoutes = {
  MainPage: '/',
  DevicesPage: `/${DEVICES}`,
  ResourcePage: `/${DEVICES}/:deviceId/:folderName*`,
  EventsPage: `/${DEVICES}/:deviceId/:folderName/${EVENTS}`,
  SettingsPage: `/${DEVICES}/${SETTINGS}`,
  SettingsAdminPage: `/${DEVICES}/:deviceId/:folderName/${SETTINGS_ADMIN}`,
};
