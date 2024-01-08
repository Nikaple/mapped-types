import { describe, it, expect } from 'vitest';
import { OmitType } from '../lib';
import { Min, getMin } from './type-helpers.test-utils';

describe('OmitType', () => {
  class FooV1 {
    @Min(1)
    foo = '';

    version = 1;

    undef = undefined;
  }

  class FooV2 extends OmitType(FooV1, ['version']) {
    bar = 'bar';

    version = 2;
  }

  describe('Property initializers', () => {
    it('should inherit property initializers', () => {
      const fooV2 = new FooV2();
      expect(getMin(fooV2, 'foo')).toEqual(1);

      expect(fooV2.foo).toEqual('');
      expect(fooV2.bar).toEqual('bar');
      expect(fooV2.version).toEqual(2);
      expect('undef' in fooV2).toBe(true)
    });
  });
});
