// T extends U ? X : Y

type NonNull<T> = T extends null ? never : T;

type Email = string | undefined;
type NonNullEmail = NonNull<Email>;