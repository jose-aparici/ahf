import { Breadcrumb } from 'domain/breadcrumbs/breadcrumbs.types';
import { DevicePaths } from 'domain/device/device.types';
import { EVENTS } from 'pages/App.routes';

import { OSCILLOSCOPE } from '../../pages/App.routes';
import { AHF_LANGUAGES } from '../languages/languages.constants';

export const pathToBreadCrumbs = (
  path: string,
  devicePaths: DevicePaths,
  fileName = '',
): Breadcrumb[] => {
  const pathSplitted = path.split('/');
  const breadCrumbs: Breadcrumb[] = pathSplitted
    .filter((_, index) => index > 2)
    .map((item, index) => {
      if (index === 1 && item === EVENTS) {
        return {
          label: new Array(AHF_LANGUAGES.length).fill('Event Logs'),
          path: pathSplitted.slice(0, index + 4).join('/'),
        };
      }

      if (index === 1 && item === OSCILLOSCOPE) {
        return {
          label: new Array(AHF_LANGUAGES.length).fill('Oscilloscope'),
          path: pathSplitted.slice(0, index + 4).join('/'),
        };
      }

      return {
        label: devicePaths[pathSplitted.slice(0, index + 4).join('/')],
        path: pathSplitted.slice(0, index + 4).join('/'),
      };
    });

  if (path.indexOf(EVENTS) >= 0 && fileName.length > 0) {
    breadCrumbs.push({
      label: new Array(AHF_LANGUAGES.length).fill(fileName),
      path: breadCrumbs[breadCrumbs.length - 1].path,
    });
  }

  return breadCrumbs;
};
