namespace Solution1 {
  interface Person {
    name: string;
    age: number
  }

  interface PersonPartial {
    name?: string;
    age?: number;
  }

  type Partial<T> = {
    [P in keyof T]?: T[P]
  }

  // How can we use this to write a function that can override some keys of a Person
}