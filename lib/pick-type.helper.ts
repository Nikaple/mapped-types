import { Type } from './types/type';
import { MappedType } from './mapped-type.interface';
import {
  inheritPropertyDecorators,
  inheritPropertyInitializers,
} from './type-helpers.utils';
import { RemoveFieldsWithType } from './types/remove-fields-with-type.type';

export function PickType<T, K extends keyof T>(
  classRef: Type<T>,
  keys: readonly K[],
) {
  const isInheritedPredicate = (propertyKey: string) =>
    keys.includes(propertyKey as K);

  abstract class PickClassType {
    constructor() {
      inheritPropertyInitializers(this, classRef, isInheritedPredicate);
      inheritPropertyDecorators(this, classRef, isInheritedPredicate);
    }
  }

  return PickClassType as MappedType<
    RemoveFieldsWithType<Pick<T, (typeof keys)[number]>, Function>
  >;
}
