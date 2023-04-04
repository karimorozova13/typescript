// pizza sizes
enum PizzaSizes {
  Small = "s",
  Medium = "m",
  Large = "l",
}

// params interface
interface IParams {
  size: PizzaSizes.Small | PizzaSizes.Medium | PizzaSizes.Large;
  toppings?: string[];
}

// fn types
type Addfn = (val: string) => void;
type GetFn = () => string[];

// pizza interface
// just public properties, use 'implements'
interface IPizza {
  size: string;
  addTopping(val: string): void;
  getToppings(): string[];
}

class Pizza implements IPizza {
  static Sizes = 5;
  // declare properties is required
  public size: string;
  private toppings: string[];

  constructor({ size, toppings = [] }: IParams) {
    this.size = size;
    this.toppings = toppings;
  }
  public addTopping: Addfn = (val) => {
    this.toppings.push(val);
  };
  public getToppings: GetFn = () => {
    return this.toppings;
  };
}

const pizza = new Pizza({
  size: PizzaSizes.Small,
  toppings: ["mushroom", "cucumber"],
});

pizza.addTopping("tomato");
console.log(pizza);
console.log(pizza.getToppings());

export {};

/**
 * class Pizza {
  constructor(public size: string, private toppings: string[] = [] ) {
    this.size = size;
    this.toppings = toppings;
  }
 */
