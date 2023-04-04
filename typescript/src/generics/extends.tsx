// add some rules for generic

interface ILength {
  length: number;
}

const makeLength = <T extends ILength>(arr: T) => {
  return arr.length;
};

console.log(makeLength([1, 3, 4]));
console.log(makeLength(["fsd", "fsa"]));

interface IPerson {
  firstName: string;
  lastName: string;
}

const makeFullName = <P extends IPerson>(person: P) => {
  return {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  };
};
console.log(makeFullName({ firstName: "HG", lastName: "fkjkjn" }));
console.log(makeFullName({ firstName: "HGKar", lastName: "fkjkjnMO", age: 3 }));

export {};
