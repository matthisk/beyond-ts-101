namespace Solution4 {
  interface Person {
    name: string,
    age: number,
    address: {
      city: string
    }
  };

  type Exclude<T, U> = T extends U ? never : T;

  function withoutAddress(person: Person): any {
    const { address, ...rest } = person;
    return rest;
  }
}