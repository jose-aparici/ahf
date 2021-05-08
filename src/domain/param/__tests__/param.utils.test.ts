import { validateValue } from 'domain/param/param.utils';

import { ParamType } from '../param.types';

describe('param utils', () => {
  describe('validate value', () => {
    test.each`
      type                          | value                   | expectedResult
      ${ParamType.FLOATING_POINT}   | ${''}                   | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.EMPTY' }}
      ${ParamType.FLOATING_POINT}   | ${undefined}            | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.EMPTY' }}
      ${ParamType.FLOATING_POINT}   | ${'notValid'}           | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.FLOATING_POINT}   | ${'-1.2.'}              | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.FLOATING_POINT}   | ${'1'}                  | ${undefined}
      ${ParamType.FLOATING_POINT}   | ${'1.2'}                | ${undefined}
      ${ParamType.FLOATING_POINT}   | ${'-1.2'}               | ${undefined}
      ${ParamType.SIGNED_INTEGER}   | ${'1.'}                 | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.SIGNED_INTEGER}   | ${'1.2'}                | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.SIGNED_INTEGER}   | ${'1'}                  | ${undefined}
      ${ParamType.SIGNED_INTEGER}   | ${'+1'}                 | ${undefined}
      ${ParamType.SIGNED_INTEGER}   | ${'-1'}                 | ${undefined}
      ${ParamType.UNSIGNED_INTEGER} | ${'1.'}                 | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.UNSIGNED_INTEGER} | ${'1.2'}                | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.UNSIGNED_INTEGER} | ${'+1.2'}               | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.UNSIGNED_INTEGER} | ${'+1'}                 | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.UNSIGNED_INTEGER} | ${'-1'}                 | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.UNSIGNED_INTEGER} | ${'1'}                  | ${undefined}
      ${ParamType.IP}               | ${'1.'}                 | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.IP}               | ${'1,'}                 | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.IP}               | ${'1.1.1.1.1.'}         | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.IP}               | ${'1.1.1.1a'}           | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.IP}               | ${'192.168'}            | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.IP}               | ${'192.168.'}           | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.IP}               | ${'192.168.1'}          | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.IP}               | ${'192.168.1.'}         | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.IP}               | ${'255.255.255.256'}    | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.IP}               | ${'255.255.255.255'}    | ${undefined}
      ${ParamType.IP}               | ${'1.1.1.1'}            | ${undefined}
      ${ParamType.MAC}              | ${'1.'}                 | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.MAC}              | ${'00:00:00:00:00:002'} | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.MAC}              | ${'00:00:00:00:00:0G'}  | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.MAC}              | ${'00:00:00:00'}        | ${{ text: 'RESOURCE.PARAM_DETAIL.EDIT.ERRORS.FORMAT' }}
      ${ParamType.MAC}              | ${'00:00:00:00:00:00'}  | ${undefined}
      ${ParamType.MAC}              | ${'Ff:FF:FF:FF:FF:FF'}  | ${undefined}
    `(
      'given $type and $value as arguments, returns $expectedResult',
      ({ type, value, expectedResult }) => {
        expect(validateValue(type, value)).toEqual(expectedResult);
      },
    );
  });
});
