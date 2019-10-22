type EmailAddress = string | string[] | null;

type NonNullableEmailAddress = NonNullable<EmailAddress>;

// type NonNullableEmailAddress = NonNullable<
//   | string
//   | string[]
//   | null
// >;

// type NonNullableEmailAddress =
//   | NonNullable<string>
//   | NonNullable<string[]>
//   | NonNullable<null>;

// type NonNullableEmailAddress =
//   | string
//   | string[];
