import { Breadcrumb } from 'domain/breadcrumbs/breadcrumbs.types';
import { DevicePaths } from 'domain/device/device.types';
import { EVENTS } from 'pages/App.routes';

import { SETTINGS_ADMIN } from '../../pages/App.routes';
import { AHF_LANGUAGES } from '../languages/languages.constants';

export const pathToBreadCrumbs = (
  path: string,
  devicePaths: DevicePaths,
  eventsFileName = '',
  settingsAdminFileName = '',
): Breadcrumb[] => {
  const pathSplitted = path.split('/');
  const breadCrumbs: Breadcrumb[] = pathSplitted
    .filter((_, index) => index > 2)
    .map((item, index) => {
      if (index === 1 && item === EVENTS) {
        // TODO translate this
        return {
          label: new Array(AHF_LANGUAGES.length).fill('Event Logs'),
          path: pathSplitted.slice(0, index + 4).join('/'),
        };
      }

      if (index === 1 && item === SETTINGS_ADMIN) {
        return {
          // TODO translate this
          label: new Array(AHF_LANGUAGES.length).fill('Settings Admin'),
          path: pathSplitted.slice(0, index + 4).join('/'),
        };
      }
      return {
        label: devicePaths[pathSplitted.slice(0, index + 4).join('/')],
        path: pathSplitted.slice(0, index + 4).join('/'),
      };
    });

  if (path.indexOf(EVENTS) >= 0 && eventsFileName.length > 0) {
    breadCrumbs.push({
      label: new Array(AHF_LANGUAGES.length).fill(eventsFileName),
      path: breadCrumbs[breadCrumbs.length - 1].path,
    });
  }

  if (path.indexOf(SETTINGS_ADMIN) >= 0 && settingsAdminFileName.length > 0) {
    breadCrumbs.push({
      label: new Array(AHF_LANGUAGES.length).fill(settingsAdminFileName),
      path: breadCrumbs[breadCrumbs.length - 1].path,
    });
  }

  return breadCrumbs;
};
