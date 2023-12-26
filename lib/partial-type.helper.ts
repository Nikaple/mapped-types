import { Type } from './types/type';
import { MappedType } from './mapped-type.interface';
import {
  inheritPropertyDecorators,
  inheritPropertyInitializers,
} from './type-helpers.utils';
import { RemoveFieldsWithType } from './types/remove-fields-with-type.type';

export function PartialType<T>(classRef: Type<T>) {
  abstract class PartialClassType {
    constructor() {
      inheritPropertyInitializers(this, classRef);
      inheritPropertyDecorators(this, classRef);
    }
  }

  Object.defineProperty(PartialClassType, 'name', {
    value: `Partial${classRef.name}`,
  });

  return PartialClassType as MappedType<
    RemoveFieldsWithType<Partial<T>, Function>
  >;
}
