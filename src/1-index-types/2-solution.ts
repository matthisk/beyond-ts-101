/**
 * Index Types: get multiple properties from object
 */
namespace Solution2 {
  const me = {
    name: 'Matthisk',
    age: 26,
    address: {
      city: 'Amsterdam',
    }
  };

  function getProperties<T, K extends keyof T>(item: T, ...names: K[]): T[K][] {
    return names.map(n => item[n]);
  }

  const values = getProperties(me, 'name', 'age');

  // How can we use this to implement underscore's pick function?

  declare function pick<T, K extends keyof T>(item: T, ...names: K[]): any;
}