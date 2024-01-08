import 'reflect-metadata';
import { Type } from './types/type';

export function inheritPropertyInitializers(
  target: Record<string, any>,
  sourceClass: Type<any>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isPropertyInherited = (key: string) => true,
) {
  try {
    const tempInstance = new sourceClass();
    const propertyNames = Object.getOwnPropertyNames(tempInstance);

    propertyNames
      .filter((propertyName) => isPropertyInherited(propertyName))
      .forEach((propertyName) => {
        target[propertyName] = tempInstance[propertyName];
      });
  } /* v8 ignore next */ catch {}
}

export function inheritPropertyDecorators(
  target: Record<string, any>,
  sourceClass: Type<any>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isPropertyInherited = (key: string) => true,
) {
  try {
    const tempInstance = new sourceClass();
    const propertyNames = Object.getOwnPropertyNames(tempInstance);

    propertyNames
      .filter((propertyName) => isPropertyInherited(propertyName))
      .forEach((propertyName) => {
        Reflect.getMetadataKeys(tempInstance, propertyName).forEach(
          (metadataKey) => {
            Reflect.defineMetadata(
              metadataKey,
              Reflect.getMetadata(metadataKey, tempInstance, propertyName),
              target,
              propertyName,
            );
          },
        );
      });
  } /* v8 ignore next */ catch {}
}
