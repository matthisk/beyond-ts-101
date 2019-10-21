namespace Solution4 {
  interface Box<T> {
    get(): T
    set(value: T): void
  }

  type Proxify<T> = {
    [P in keyof T]: Box<T[P]>
  }

  type A = Proxify<{ a: string, b: number }>;
  type B = Proxify<string[]>;
  type C = Proxify<[string, number]>;
}