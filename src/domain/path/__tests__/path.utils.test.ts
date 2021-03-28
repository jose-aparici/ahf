import { extractDeviceFromPath } from '../path.utils';

describe('path utils', () => {
  describe('', () => {
    it('should return device id', () => {
      const path = '/devices/1/folder1.1/folder1.2';
      const result = extractDeviceFromPath(path);
      expect(result).toEqual('1');
    });
  });
});
