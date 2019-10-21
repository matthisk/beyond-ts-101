type EmailAddress = string | string[] | null | undefined;

type NonNullableEmailAddress = NonNullable<EmailAddress>;

// type NonNullableEmailAddress = NonNullable<
//   | string
//   | string[]
//   | null
//   | undefined
// >;

// type NonNullableEmailAddress =
//   | NonNullable<string>
//   | NonNullable<string[]>
//   | NonNullable<null>
//   | NonNullable<undefined>;