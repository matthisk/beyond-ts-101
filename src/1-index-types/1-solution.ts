/**
 * Index Types: get property from object
 */
namespace Solution1 {
  const me = {
    name: 'Matthisk',
    age: 27,
    address: {
      city: 'Amsterdam',
    }
  };

  declare function getProperty<T, K extends keyof T>(item: T, name: K): T[K];

  const name = getProperty(me, 'name');

  // How can we use this to implement underscore's `pluck` method?

  declare function pluck<T, K extends keyof T>(items: T[], name: K): T[K][];

  const result = pluck([me], 'age');
}