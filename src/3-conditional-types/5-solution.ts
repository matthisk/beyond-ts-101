namespace Solution5 {
  interface Person {
    name: string;
    age: number
  }

  interface FormValues {
    father: Person;
  }

  type FormErrors<T> = {
    [P in keyof T]?: T[P] extends object ? FormErrors<T[P]> : string
  };

  declare function validate(values: FormValues): FormErrors<FormValues>;

  const errors = validate({ father: { name: 'someone', age: 0 } })
}





















/**
 * An object containing error messages whose keys correspond to FormikValues.
 * Should be always be and object of strings, but any is allowed to support i18n libraries.
 */
export type FormikErrors<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
  ? Values[K][number] extends object // [number] is the special sauce to get the type of array's element. More here https://github.com/Microsoft/TypeScript/pull/21316
  ? FormikErrors<Values[K][number]>[] | string | string[]
  : string | string[]
  : Values[K] extends object
  ? FormikErrors<Values[K]>
  : string;
};