import React, { useState } from "react";

interface IProps {
  initValue?: number;
  step?: number;
}
interface IState {
  val: number;
}

// const Counter: React.FC<IProps> = ({ initValue = 3, step = 4 }) => {
const Counter = ({ initValue = 3, step = 4 }: IProps) => {
  const [val, setVal] = useState(initValue);

  const increment = () => setVal((prev) => prev + step);
  const decrement = () => setVal((prev) => prev - step);

  const [first, setFirst] = useState<string | null>(null);
  const fn = () => setFirst("hgkhjk");

  return (
    <div>
      <p> {val}</p>
      <button onClick={decrement}>Decrement by {step}</button>

      <button onClick={increment}>Increment {step}</button>
    </div>
  );
};

export default Counter;
