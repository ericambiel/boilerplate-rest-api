import { Transform } from 'class-transformer';

/**
 * Any default value can be passed, it is used
 * to populate an object if not specified.
 * @param defaultValue
 * @constructor
 */
export default function Default(defaultValue: unknown) {
  return Transform(({ value }) => {
    if (value) return value;
    if (typeof defaultValue === 'function') return defaultValue();
    if (Array.isArray(defaultValue)) return [...defaultValue];
    if (typeof defaultValue === 'object') {
      return defaultValue === null ? null : { ...defaultValue };
    }
    return defaultValue;
  });
}
