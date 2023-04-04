// require to pass type for generic-interface

interface User<I> {
  id: I;
}
const poly: User<number> = { id: 33 };
const mango: User<string> = { id: "ghnhg" };
console.log(poly, mango);

interface Tab<C> {
  id: string;
  position: number;
  isActive: boolean;
  content: C;
}
type TStringTab = Tab<string>;
type TArrString = Tab<string[]>;

const tab1: TStringTab = {
  id: "fsd",
  position: 3,
  isActive: true,
  content: "lorem fdhtgh",
};
const tab2: TArrString = {
  id: "mono",
  position: 1,
  isActive: false,
  content: ["fdfgfg", "fsdgsrdg"],
};

console.log(tab1, tab2);

export {};
