import { ParamType } from '../param.types';
import { validateValue } from '../param.utils';

describe('param utils', () => {
  describe('validate value', () => {
    describe('single precision floating point', () => {
      it('should return error if is empty', () => {
        const value = '';
        const result = validateValue(
          ParamType.SINGLE_PRECISION_FLOATING_POINT,
          value,
        );
        expect(result?.text).toBe('RESOURCE.PARAM_DETAIL.EDIT.ERRORS.EMPTY');
      });

      it('should return error if is undefined', () => {
        const value = undefined;
        const result = validateValue(
          ParamType.SINGLE_PRECISION_FLOATING_POINT,
          value,
        );
        expect(result?.text).toBe('RESOURCE.PARAM_DETAIL.EDIT.ERRORS.EMPTY');
      });
      it('should return error if format is not valid', () => {
        const value = 'notValid';
        const result = validateValue(
          ParamType.SINGLE_PRECISION_FLOATING_POINT,
          value,
        );
        expect(result?.text).toBe('RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT');
      });

      it('should return undefined if value is valid', () => {
        const value = '-1.2';
        const result = validateValue(
          ParamType.SINGLE_PRECISION_FLOATING_POINT,
          value,
        );
        expect(result).toBe(undefined);
      });
    });
  });
});
