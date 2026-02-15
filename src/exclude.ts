/* _____________ ここにコードを記入 _____________ */

type MyExclude<T, U> = T extends U ? never : T;

/* _____________ テストケース _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
	Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
	Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
	Expect<
		Equal<MyExclude<string | number | (() => void), Function>, string | number>
	>,
];
