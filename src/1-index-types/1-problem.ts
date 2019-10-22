/**
 * Index Types: get property from object
 */
namespace Problem1 {
  const me = {
    name: 'Matthisk',
    age: 27,
    address: {
      city: 'Amsterdam',
    }
  };

  function getProperty(item, name) {
    return item[name];
  }

  const name = getProperty(me, 'name');

  // How can we express a type Keys which captures a union of all allowed keys on 'me'?

  type Keys = keyof typeof me;
}