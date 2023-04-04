const arr: number[] = [1, 2, 3, 4, 5];
const arr1: Array<number> = [1, 2, 3, 4, 5];

const arrOfSeveralTypes: (number | string)[] = [1, 2, 3, 4, "gsdg", "fsadg"];

arr1.push(7);

// read only arrays
const readOnlyArr: readonly number[] = [1, 2, 3, 4, 5];
const readOnlyArr1: ReadonlyArray<string> = ["s", "f", "d"];

// tuple, all args are required with correct types
const rgb: [number, number, number] = [255, 0, 100];

const entries = Object.entries({ a: 1, b: 2, c: 3 });

console.log(arr, arr1);
console.log(arrOfSeveralTypes);
console.log(readOnlyArr, readOnlyArr1);
console.log(rgb);
console.log(entries);

export {};
