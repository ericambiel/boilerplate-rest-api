import _ from 'lodash';

/**
 * Removes 'readonly' attributes from a type's properties
 * @author https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 * @example
 * type LockedAccount = {
 *   readonly id: string;
 *   readonly name: string;
 * };
 *
 * type UnlockedAccount = CreateMutable<LockedAccount>;
 *
 * // Result
 * // type UnlockedAccount = {
 * //    id: string;
 * //    name: string;
 * // }
 */
export type WriteAllowed<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

/**
 * Convert all property types of a given type to a new type
 * @author Eric Ambiel
 * @example
 * interface Person {
 *     name: string;
 *     age: number;
 *     location: string;
 *     address: {
 *         street: string
 *     }
 * }
 *
 * type ModifiedPersonType = PropsToNewType<Person, string>;
 *
 * // Result
 * type ModifiedPersonType = {
 *     name: string;
 *     age: string;
 *     location: string;
 *     address: string
 * }
 */
export type PropsToNewType<Type, NewType> = {
  [Properties in Type as keyof Type]: NewType;
};

/**
 * @param enm
 * @param value
 * @author Eric Ambiel
 */
export function stringToEnum<T>(
  enm: { [s: string]: T },
  value: string,
): T | undefined {
  if ((Object.values(enm) as unknown as string[]).includes(value))
    return value as unknown as T;
  return undefined;
}

/**
 * Group array by same predicate
 * @param array Array to be used for grouping
 * @param predicate Predicate define de condition to grouping
 * @author https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
 */
export function groupByPredicate<T>(
  array: T[],
  predicate: (value: T, idx: number, arr: T[]) => string,
) {
  return array.reduce((acc, value, idx, arr) => {
    (acc[predicate(value, idx, arr)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });
}

/**
 * Filter objects from an array with given filter.
 * @param dataToFilter
 * @param filter
 * @return Returns all objects from a list that matches the specified filter.
 * @private
 * @example https://lodash.com/docs/4.17.15#filter
 */
export function filterObjsWith<T>(
  dataToFilter: T[],
  filter: Record<string, unknown>,
): T[] {
  return <T[]>_.filter(dataToFilter, filter);
}

/**
 * Transform Array of Array in Object Array
 * @author Eric Ambiel
 * @example
 * [[name,surname],['Eric','Ambiel'],['Maria','Cristina']] =>
 * [{name:'Eric',surname:'Ambiel'},{name:'Maria',surname:'Cristina'}]
 */
export function arrayArrayToObjArrayHead<T>(
  rows: string[][],
  options?: { undefinedTo: number | string | boolean | null },
): T[] {
  const keys = rows.shift();
  if (keys) return <T[]>rows.map(values =>
      keys.reduce((preview, current, i) => {
        const newProperty: Record<string, unknown> = {};
        newProperty[current] = values[i] ?? options?.undefinedTo;
        return { ...preview, ...newProperty };
      }, {}),
    );
  throw new Error('First array position cannot be undefined');
}

export function nameObjArrFromFirst<T>(
  rows: Record<number | string, number | string | undefined>[],
  options?: { undefinedTo: number | string | boolean | null },
): T[] {
  // const keys = Object.values(rows.shift() ?? {});
  const keys = rows.shift();

  if (!keys) throw new Error('First array position cannot be undefined');

  return <T[]>rows.map(values => {
    let concatObjs = {};

    Object.keys(keys).forEach((key, idx) => {
      concatObjs = {
        ...concatObjs,
        [keys[key] ?? `undefined${idx}`]: values[key] ?? options?.undefinedTo,
      };
    });

    if (!concatObjs) throw new Error('Some error occurred in the conversion!');

    return concatObjs;
  });
}

/**
 * Remove duplicated objects from array
 * @param array
 * @param filter Property of the object that will be
 * used to define if the object is equal to the others.
 * @author Eric Ambiel
 */
export function removeDuplicateFromArray<T>(array: T[], filter: keyof T): T[] {
  return _.uniqBy(array, filter);
}

// const stringifyToSlashedJSON = (
//   obj: Record<string, unknown> | Record<string, unknown>[],
// ) => JSON.stringify(obj).replace(/"/g, '\\"');
