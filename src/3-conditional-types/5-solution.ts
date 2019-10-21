namespace Solution5 {
  interface Person {
    name: string;
    age: number
  }

  interface FormValues {
    name: string;
    father: Person;
  }

  type FormErrors<T> = {
    [P in keyof T]?: T[P] extends object ? FormErrors<T[P]> : string
  };

  declare function validate(values: FormValues): FormErrors<FormValues>;
}