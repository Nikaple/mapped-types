import { Type } from './types/type';
import { MappedType } from './mapped-type.interface';
import {
  inheritPropertyDecorators,
  inheritPropertyInitializers,
} from './type-helpers.utils';
import { RemoveFieldsWithType } from './types/remove-fields-with-type.type';

export function OmitType<T, K extends keyof T>(
  classRef: Type<T>,
  keys: readonly K[],
) {
  const isInheritedPredicate = (propertyKey: string) =>
    !keys.includes(propertyKey as K);

  abstract class OmitClassType {
    constructor() {
      inheritPropertyInitializers(this, classRef, isInheritedPredicate);
      inheritPropertyDecorators(this, classRef, isInheritedPredicate);
    }
  }

  return OmitClassType as MappedType<
    RemoveFieldsWithType<Omit<T, (typeof keys)[number]>, Function>
  >;
}
