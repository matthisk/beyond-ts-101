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

  function getProperty(item, name) {
    return item[name];
  }

  const name = getProperty(me, 'name');
}