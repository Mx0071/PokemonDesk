// // 1.  concat('Hello ', 'World') // -> Hello World;
// function concat(word1: string, word2: string): string {
//   return `${word1}${word2}`;
// }
// const result = concat('Hello ', 'World') // -> Hello World;

// // 2. Interface
// type NumStringArray = Array<number | string>;

// interface Dictionary {
//   [Key: string]: string | NumStringArray;
// }

// interface HomeTaskInterface {
//   [Key: string]: string | NumStringArray | Array<Dictionary>;
// }

// const MyHometask: HomeTaskInterface = {
// 	howIDoIt: "I Do It Wel",
// 	simeArray: ["string one", "string two", 42],
// 	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// };

// // 3. Generics
// interface MyArray<T> {
//   [N: number]: T;

//   reduce<U>(fn: (el1: U, el2: T) => U, init: U): U;
// }
