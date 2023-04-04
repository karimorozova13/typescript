// all primitive types : number, string, boolean, any, object, null, undefined

let a: number = 5;
const name: string = "Kari";

let b: any = 10;

b = "string";

const object: object = () => {};

// const object: object =  {};
// const object: object = [];

let severalTypes: string | number | boolean = 5;
severalTypes = "new string";
severalTypes = true;

console.log(a, name);
console.log(b, object);
console.log(severalTypes);

export {};
