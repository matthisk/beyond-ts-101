/**
 * Index Types: get property chain from object
 */
namespace Solution3 {
  const me = {
    name: 'Matthisk',
    age: 26,
    address: {
      city: 'Amsterdam',
    }
  };

  function getIn<T, K extends keyof T>(o: T, name0: K): T[K]
  function getIn<T, K extends keyof T, K1 extends keyof T[K]>(o: T, name0: K, name1: K1): T[K][K1]

  function getIn<T>(obj: T, ...names) {
    return names.reduce((acc, x) => acc[x] ? acc[x] : x, obj);
  }
}