/**
 * Index Types: get multiple properties from object
 */
namespace Problem2 {
  const me = {
    name: 'Matthisk',
    age: 27,
    address: {
      city: 'Amsterdam',
    }
  };

  function getProperties(item, ...names) {
    return names.map(n => item[n]);
  }

  const values = getProperties(me, 'name', 'age');
}