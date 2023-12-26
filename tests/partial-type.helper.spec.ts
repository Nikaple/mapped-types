import { describe, it, expect } from 'vitest';
import { OmitType, PartialType } from '../lib';
import { Min, getMin } from './type-helpers.test-utils';
describe('PartialType', () => {
  class TestClass {
    prop1!: string;
    prop2!: number;
    prop3!: boolean;
  }

  it('should create a new class with all properties set to optional', () => {
    const PartialTestClass = PartialType(TestClass);
    const partial = new PartialTestClass();

    expect(partial.prop1).toBeUndefined();
    expect(partial.prop2).toBeUndefined();
    expect(partial.prop3).toBeUndefined();
  });

  it('should inherit property initializers', () => {
    class TestClassWithInitializer {
      prop1 = 'default';
      prop2!: number;
    }

    const PartialTestClass = PartialType(TestClassWithInitializer);
    const partial = new PartialTestClass();

    expect(partial.prop1).toBe('default');
    expect(partial.prop2).toBeUndefined();
  });

  it('should inherit property decorators', () => {
    class TestClassWithDecorator {
      @Min(1)
      prop1 = '';

      @Min(2)
      prop2 = 0;
    }

    const PartialTestClass = PartialType(TestClassWithDecorator);
    const partial = new PartialTestClass();

    expect(partial.prop1).toBe('');
    expect(partial.prop2).toBe(0);
    expect(getMin(partial, 'prop1')).toBe(1);
    expect(getMin(partial, 'prop2')).toBe(2);
  });
});
