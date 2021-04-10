export const DEVICES = 'devices';
export const FOLDER = 'folder';
export const PARAM = 'param';

export const AppRoutes = {
  MainPage: '/',
  DevicesPage: `/${DEVICES}`,
  DevicePage: `/${DEVICES}/:deviceId`,
  ResourcePage: `/${DEVICES}/:deviceId/:folderName*`,
  EventsPage: `/${DEVICES}/:deviceId/events`,
};
