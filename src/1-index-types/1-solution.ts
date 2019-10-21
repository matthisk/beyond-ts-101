/**
 * Index Types: get property from object
 */
namespace Solution1 {
  const me = {
    name: 'Matthisk',
    age: 26,
    address: {
      city: 'Amsterdam',
    }
  };

  function getProperty<T, K extends keyof T>(item: T, name: K): T[K] {
    return item[name];
  }

  const name = getProperty(me, 'name');

  // How can we use this to implement underscore's `pluck` method?
}