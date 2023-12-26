import { Type } from './types/type';

export interface MappedType<T> extends Type<T> {
  new (): T;
}
