namespace Problem1 {
  interface Person {
    name: string;
    age: number
  }

  interface PersonPartial {
    name?: string;
    age?: number;
  }
}