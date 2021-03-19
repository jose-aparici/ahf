import { pathToBreadCrumbs } from '../breadcrumb.utils';

describe('breadcrumb utils', () => {
  describe('', () => {
    it('should return a breadcrumbs array from path', () => {
      const path = '/devices/1/folder1.1/folder1.2';
      const result = pathToBreadCrumbs(path);
      expect(result).toEqual([
        { label: '1', path: '/devices/1' },
        { label: 'folder1.1', path: '/devices/1/folder1.1' },
        { label: 'folder1.2', path: '/devices/1/folder1.1/folder1.2' },
      ]);
    });
  });
});
