namespace Solution6 {
  type NonFunctionKeys<T extends object> = {
    [K in keyof T]: T[K] extends Function ? never : K
  }[keyof T];

  type Keys = NonFunctionKeys<Pizza>;
  type Props = Pick<Pizza, Keys>;

  class Pizza {
    slices: number
    name: string

    constructor(init: Props) {
      Object.assign(this, init);
    }
  }
}