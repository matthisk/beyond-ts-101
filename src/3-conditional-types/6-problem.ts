namespace Problem6 {
  type Props = any;

  class Pizza {
    slices: number
    name: string

    constructor(init: Props) {
      Object.assign(this, init)
    }
  }
}