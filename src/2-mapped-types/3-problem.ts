namespace Problem3 {
  interface Person {
    name: string;
    age: number
  }

  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }
}