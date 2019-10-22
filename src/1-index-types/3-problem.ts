/**
 * Index Types: get property chain from object
 */
namespace Problem3 {
  const me = {
    name: 'Matthisk',
    age: 27,
    address: {
      city: 'Amsterdam',
    }
  };

  function getIn(obj, ...names) {
    return names.reduce((acc, x) => acc[x] ? acc[x] : x, obj);
  }

  getIn(me, 'address', 'city');
}