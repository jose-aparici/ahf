import { Breadcrumb } from 'domain/breadcrumbs/breadcrumbs.types';
import { DevicePaths } from 'domain/device/device.types';
import { EVENTS, SETTINGS } from 'pages/App.routes';

import { OSCILLOSCOPE, SETTINGS_ADMIN } from '../../pages/App.routes';
import { MAX_LENGTH } from './breadcrumbs.constants';

export const pathToBreadCrumbs = (
  currentLanguage: number,
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
          label: 'Event Logs',
          path: pathSplitted.slice(0, index + 4).join('/'),
        };
      }

      if (index === 1 && item === OSCILLOSCOPE) {
        return {
          label: 'Oscilloscope',
          path: pathSplitted.slice(0, index + 4).join('/'),
        };
      }

      if (index === 2 && item === SETTINGS) {
        return {
          label: 'Settings',
          path: pathSplitted.slice(0, index + 4).join('/'),
        };
      }

      if (index === 1 && item === SETTINGS_ADMIN) {
        return {
          // TODO translate this
          label: 'Parameter sets',
          path: pathSplitted.slice(0, index + 4).join('/'),
        };
      }
      return {
        label:
          devicePaths[pathSplitted.slice(0, index + 4).join('/')][
            currentLanguage
          ],
        path: pathSplitted.slice(0, index + 4).join('/'),
      };
    });

  if (path.indexOf(EVENTS) >= 0 && eventsFileName.length > 0) {
    breadCrumbs.push({
      label: eventsFileName,
      path: breadCrumbs[breadCrumbs.length - 1].path,
    });
  }

  if (path.indexOf(SETTINGS_ADMIN) >= 0 && settingsAdminFileName.length > 0) {
    breadCrumbs.push({
      label: settingsAdminFileName,
      path: breadCrumbs[breadCrumbs.length - 1].path,
    });
  }

  truncBreadCrumbs(breadCrumbs, 1);

  return breadCrumbs;
};

const breadCrumbMaxLength = (breadcrumbs: Breadcrumb[]) => {
  const totalLength = breadcrumbs.reduce(
    (acum, current) => acum + current.label.length,
    0,
  );
  return totalLength > MAX_LENGTH;
};

const truncBreadCrumbs = (breadcrumbs: Breadcrumb[], index: number) => {
  if (breadCrumbMaxLength(breadcrumbs) && index < breadcrumbs.length) {
    breadcrumbs[index].label = '...';
    truncBreadCrumbs(breadcrumbs, index + 1);
  } else {
    return breadcrumbs;
  }
};
