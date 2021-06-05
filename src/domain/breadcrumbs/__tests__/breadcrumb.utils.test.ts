import { pathToBreadCrumbs } from '../breadcrumb.utils';

describe('breadcrumb utils', () => {
  describe('', () => {
    it('should return a breadcrumbs array from path', () => {
      const path = '/devices/1/folder1.1/folder1.2';
      const result = pathToBreadCrumbs(path, '');
      expect(result).toEqual([
        { label: 'folder1.1', path: '/devices/1/folder1.1' },
        { label: 'folder1.2', path },
      ]);
    });

    it('should return a breadcrumbs array from events path without filename', () => {
      const path = '/devices/1/folder1.1/events';
      const result = pathToBreadCrumbs(path, '');
      expect(result).toEqual([
        { label: 'folder1.1', path: '/devices/1/folder1.1' },
        { label: 'Event Logs', path },
      ]);
    });

    it('should return a breadcrumbs array from events path with filename', () => {
      const path = '/devices/1/folder1.1/events';
      const result = pathToBreadCrumbs(path, 'fileName');
      expect(result).toEqual([
        { label: 'folder1.1', path: '/devices/1/folder1.1' },
        { label: 'Event Logs', path },
        { label: 'fileName', path },
      ]);
    });
  });
});
