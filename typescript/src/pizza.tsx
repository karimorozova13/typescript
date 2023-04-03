enum PizzaSizes {
  Small = "s",
  Medium = "m",
  Large = "l",
}

interface IPizza {
  size: PizzaSizes.Small | PizzaSizes.Medium | PizzaSizes.Large;
  toppings: string[];
  //   old school
  //   logSize: () => void;
  //   getSize: () => string;
  logSize(): void;
  //   not required
  // logSize?(): void
  getSize(): string;
  addTopping(val: string): void;
}

const pizza: IPizza = {
  size: PizzaSizes.Medium,
  toppings: ["cheese", "souce"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(val) {
    this.toppings.push(val);
  },
};

console.log(pizza);

export {};
