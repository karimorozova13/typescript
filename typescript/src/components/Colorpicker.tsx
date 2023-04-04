import React, { useState } from "react";

type TOption = {
  label: string;
  color: string;
};
interface IProps {
  options: TOption[];
  initialOptionPos?: number;
}

const ColorPicker = ({ options, initialOptionPos = 1 }: IProps) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(initialOptionPos - 1);

  const setActiveIdx = (index: number) => setActiveOptionIdx(index);

  const { label } = options[activeOptionIdx];

  return (
    <div>
      <h2>Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            style={{ backgroundColor: color, width: 50, height: 50, margin: 5 }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
