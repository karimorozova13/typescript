// short type declaration
type FnNumber = (x: number, y: number) => number;
type FnString = (x: number, y: number) => string;
type FnBollean = (x?: number, y?: number) => boolean;
type RestParams = (a: number, b: number, ...restParams: number[]) => number;

// fn without return
type FnVoid = (m: string) => void;

// interface fn
interface IAddFn {
  (a: number, b: number): number;
}

// types of parameters
const addParametrsFull = (x: number, y: number) => {
  return x + y;
};
const addParametrs: FnNumber = (x, y) => {
  return x + y;
};

// type of returned value
const addExpressionFull = (x: number, y: number): string => {
  return "here";
};
const addExpression: FnString = (x, y) => {
  return "here";
};

// not required parameter
const addFull = (x?: number, y?: number): boolean => {
  return true;
};
const add: FnBollean = (x, y) => {
  return true;
};
const addInt: IAddFn = (x, y) => {
  return x + y;
};

// rest params
const fnFull = (a: number, b: number, ...resParams: number[]): number => {
  return 33;
};
const fn: RestParams = (a, b, ...resParams) => {
  return 33;
};

const log: FnVoid = (message) => {
  console.log(message);
  //   return 5;
};

console.log(addParametrs(5, 6));
console.log(addParametrsFull(2, 1));
console.log(addExpression(5, 7));
console.log(addExpressionFull(7, 8));
console.log(add());
console.log(addFull(3, 5));
console.log(fn(1, 2, 3, 4, 5));
console.log(fnFull(1, 2, 3, 4, 5));
console.log(addInt(3, 5));
console.log(log("Kari"));

export {};
