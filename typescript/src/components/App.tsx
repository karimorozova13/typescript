import React from "react";
import Counter from "./Counter";
import Colorpicker from "./Colorpicker";
import Form from "./Form";

import TodoList from "./todos/TodoList";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const App = () => {
  return (
    <>
      <Counter />
      <Colorpicker options={colorPickerOptions} initialOptionPos={4} />
      <Form onSubmitHandler={(cred) => console.log(cred)} />
      <TodoList />
    </>
  );
};

export default App;
