import styled from "styled-components";
import todos from "./todos.json";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 20px;
`;

const TodoList = ({}) => {
  const [todoList, setTodoList] = useState(todos);
  const saveTask = (values) => {
    setTodoList((arr) =>
      arr.map((el) => {
        if (values.id === el._id) return values;
        return el;
      })
    );
  };
  const deleteTodo = (id) => {
    console.log(id);
    setTodoList((arr) => arr.filter(({ _id }) => _id !== id));
  };
  return (
    <List>
      {todoList.map((el) => {
        return (
          <TodoItem
            deleteTodo={deleteTodo}
            saveTask={saveTask}
            key={el.title}
            el={el}
          />
        );
      })}
    </List>
  );
};

export default TodoList;
