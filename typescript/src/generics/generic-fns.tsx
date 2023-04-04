// generic types
// argument type <T>

// generic with one parameter
const reverseArr = <T,>(arr: T[]) => {
  return [...arr].reverse();
};
console.log(reverseArr([1, 2, 3, 4, 5]));
console.log(reverseArr(["Kari", "Joe", "Ajax"]));
console.log(reverseArr([{ a: 1 }, { b: 2 }, { c: 3 }]));

// generic with several parameters

// const isEqual = <T, >(a: T, b: t) => if both parameters has same type

const isEqual = <T, Y>(a: T, b: Y) => {
  return Object.is(a, b);
};

console.log(isEqual(3, 3));
console.log(isEqual("3", 3));

const makeArr = <T, Y>(a: T, b: Y) => {
  return [a, b];
};

console.log(makeArr(2, 3));
console.log(makeArr("Tom", "John"));
console.log(makeArr(3, "3"));

// REST
// const multiply = <Y, T>(a: Y, ...rest: T[]) => {
//   return a;
// };

export {};
