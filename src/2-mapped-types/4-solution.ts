namespace Solution4 {
  interface Proxy<T> {
    get(): T
    set(value: T): void
  }

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
  }

  // What happens if we apply Proxify to an object, list, or tuple?
  type T0 = Proxify<{ a: string, b: number }>;
  type T1 = Proxify<string[]>;
  type T2 = Proxify<[string, number]>;
}