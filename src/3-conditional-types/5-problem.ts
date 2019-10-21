namespace Problem5 {
  interface Person {
    name: string;
    age: number
  }

  interface FormValues {
    id: number;
    father: Person;
    mother: Person;
  }

  function validate(values: FormValues): any {
    const errors = {} as any;

    if (values.id < 0) {
      errors.id = 'Fout';
    }

    if (values.father.age < 0) {
      errors.father = { age: 'fout' };
    }

    return errors;
  }
}