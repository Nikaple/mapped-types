import { describe, it, expect } from 'vitest';
import { PickType } from '../lib';
import { Min, getMin } from './type-helpers.test-utils';

describe('PickType', () => {
  class FooV1 {
    @Min(1)
    foo = '';

    version = 1;
  }

  class FooV2 extends PickType(FooV1, ['foo']) {
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
    });
  });
});
