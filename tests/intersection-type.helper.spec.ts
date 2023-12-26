import { describe, it, expect } from 'vitest';
import { IntersectionType } from '../lib/intersection-type.helper';
import { Min, getMin } from './type-helpers.test-utils';

describe('IntersectionType', () => {
  class A {
    @Min('a')
    a = 'a';
  }

  class B {
    @Min('b')
    b = 'b';
  }

  class C {
    @Min('c')
    c = 'c';
  }

  it('should create an intersection class type', () => {
    const IntersectionAB = IntersectionType(A, B);
    const instanceAB = new IntersectionAB();
    expect(instanceAB.a).toBe('a');
    expect(instanceAB.b).toBe('b');

    const IntersectionABC = IntersectionType(A, B, C);
    const instanceABC = new IntersectionABC();
    expect(instanceABC.a).toBe('a');
    expect(instanceABC.b).toBe('b');
    expect(instanceABC.c).toBe('c');
  });

  it('should inherit property initializers', () => {
    class D extends A {
      @Min('d')
      d = 'd';
    }

    const IntersectionABD = IntersectionType(A, B, D);
    const instanceABD = new IntersectionABD();
    expect(instanceABD.a).toBe('a');
    expect(instanceABD.b).toBe('b');
    expect(instanceABD.d).toBe('d');

    expect(getMin(instanceABD, 'a')).toBe('a');
  });
});
