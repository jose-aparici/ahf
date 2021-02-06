export const DEVICES = 'devices';
export const FOLDER = 'folder';
export const PARAM = 'param';

export const AppRoutes = {
  MainPage: '/',
  DevicesPage: `/${DEVICES}`,
  DevicePage: `/${DEVICES}/:deviceId`,
  FoldersPage: `/${DEVICES}/:deviceId/${FOLDER}/:folderName`,
  ParamsPage: `/${DEVICES}/:deviceId/${FOLDER}/:folderName/${PARAM}/:paramId`,
};
