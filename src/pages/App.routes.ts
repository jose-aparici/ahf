export const DEVICES = 'devices';
export const FOLDER = 'folder';
export const PARAM = 'param';
export const EVENTS = 'events';
export const SETTINGS = 'settings';

export const AppRoutes = {
  MainPage: '/',
  DevicesPage: `/${DEVICES}`,
  ResourcePage: `/${DEVICES}/:deviceId/:folderName*`,
  EventsPage: `/${DEVICES}/:deviceId/:folderName/${EVENTS}`,
  SettingsPage: `/${DEVICES}/${SETTINGS}`,
};
