namespace Solution3 {
  interface Person {
    name: string;
    age: number
  }

  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }

  type Readonly<T> = {
    readonly [P in keyof T]: T[P]
  }

  const me: Readonly<Person> = {
    name: 'Matthisk',
    age: 27,
  };

  // How can we use this to implement the type of Object.freeze?
}