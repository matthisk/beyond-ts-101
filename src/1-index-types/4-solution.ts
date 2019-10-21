namespace Solution4 {
  /**
   * Index Types
   */
  const me = {
    name: 'Matthisk',
    age: 26,
    address: {
      city: 'Amsterdam',
    }
  };

  function setIn<T, K extends keyof T>(o: T, v: T[K], name0: K): void
  function setIn<T, K extends keyof T, K1 extends keyof T[K]>(o: T, v: T[K][K1], name0: K, name1: K1): void
  function setIn(o, v, ...names) {
    /* ... */
  }
}