import { Breadcrumb } from './breadcrumbs.types';

export const pathToBreadCrumbs = (path: string): Breadcrumb[] => {
  const pathSplitted = path.split('/');
  return pathSplitted
    .filter((_, index) => index > 1)
    .map((item, index) => ({
      label: item,
      path: pathSplitted.slice(0, index + 3).join('/'),
    }));
};
