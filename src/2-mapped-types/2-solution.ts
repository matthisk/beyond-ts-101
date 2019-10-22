namespace Solution2 {
  const me = {
    name: 'Matthisk',
    age: 26,
    address: {
      city: 'Amsterdam',
    }
  };

  type Pick<T, K extends keyof T> = { [P in K]: T[P] }

  declare function pick<T, K extends keyof T>(item: T, ...names: K[]): Pick<T, K>;
}