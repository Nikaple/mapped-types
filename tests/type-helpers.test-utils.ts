import 'reflect-metadata';

export function Min(val: any): PropertyDecorator {
  return Reflect.metadata('min', val);
}

export function getMin(obj: object, key: string) {
  return Reflect.getMetadata('min', obj, key);
}
