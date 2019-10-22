namespace Solution4 {
  interface Person {
    name: string,
    age: number,
    address: {
      city: string
    }
  };

  type Exclude<T, U> = T extends U ? never : T;

  type E0 = Exclude<keyof Person, 'address'>;

  // How can we use Excude to fill in the return type?

  function withoutAddress<T extends Person>(person: T) {
    const { address, ...rest } = person;
    return rest;
  }
}