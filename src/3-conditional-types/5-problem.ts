namespace Problem5 {
  interface Person {
    name: string;
    age: number
  }

  interface FormValues {
    father: Person;
  }

  function validate(values: FormValues): any {
    const errors = {} as any;

    if (values.father.age < 0) {
      errors.father = { age: 'too young!' };
    }

    return errors;
  }
}