// use for objects

// you can't add new prop
interface PluginConfig {
  stats: number;
  //   prevent changing of property
  readonly draggable: boolean;
  status: string;
  //   not required property
  startIndex?: number;
}

const config: PluginConfig = {
  stats: 5,
  draggable: true,
  status: "Active",
  startIndex: 0,
};

const config1: PluginConfig = {
  stats: 5,
  draggable: true,
  status: "Active",
};

// for object with different quantity of keys but strict types
// index signatures
interface Employees {
  [key: string]: number;

  //   array of numbers
  // [key: string]: number[];
}

const employees: Employees = {
  kar: 5,
  joe: 7,
  fds: 3,
};
const entries = Object.entries(employees);
let bestName = "";
let bestIdx = 0;

for (const [name, value] of entries) {
  if (bestIdx <= value) {
    bestIdx = value;
    bestName = name;
  }
}

// extends sveral interfaces
interface Shape {
  color: string;
}
interface Extended extends Shape {
  length: number;
}
const dog = {} as Extended;
dog.color = "blue";
dog.length = 10;

const dog1: Extended = { color: "red", length: 4 };

console.log(dog);
console.log(dog1);
console.log(bestName);
console.log(bestIdx);
console.log(config, config1, employees);

export {};
