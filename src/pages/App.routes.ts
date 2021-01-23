export const DEVICES = 'devices';
export const FOLDER = 'folder';

export const AppRoutes = {
  MainPage: '/',
  DevicesPage: `/${DEVICES}`,
  DevicePage: `/${DEVICES}/:deviceId`,
  FoldersPage: `/${DEVICES}/:deviceId/${FOLDER}/:folderId`,
};
