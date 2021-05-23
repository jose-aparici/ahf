import { EVENTS } from 'pages/App.routes';

import { Breadcrumb } from './breadcrumbs.types';

export const pathToBreadCrumbs = (
  path: string,
  fileName = '',
): Breadcrumb[] => {
  const pathSplitted = path.split('/');
  const breadCrumbs = pathSplitted
    .filter((_, index) => index > 2)
    .map((item, index) => {
      if (index === 1 && item === EVENTS) {
        return {
          label: 'Event Logs',
          path: pathSplitted.slice(0, index + 4).join('/'),
        };
      }
      return {
        label: item,
        path: pathSplitted.slice(0, index + 4).join('/'),
      };
    });

  if (path.indexOf(EVENTS) >= 0 && fileName.length > 0) {
    breadCrumbs.push({
      label: fileName,
      path: breadCrumbs[breadCrumbs.length - 1].path,
    });
  }

  return breadCrumbs;
};
