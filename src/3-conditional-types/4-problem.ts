namespace Problem4 {
  interface Person {
    name: string,
    age: number,
    address: {
      city: string
    }
  };

  function withoutAddress(person: Person) {
    const { address, ...rest } = person;
    return rest;
  }
}