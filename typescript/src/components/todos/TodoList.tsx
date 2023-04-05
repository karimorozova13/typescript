import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";
import ITodo from "../../interfaces/Todo.interface";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 20px;
`;

const initialTodos = () => {
  const savedTodos = localStorage.getItem("todoList");
  return savedTodos ? JSON.parse(savedTodos) : [];
};
const TodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>(initialTodos);

  const saveTask = (values: ITodo) => {
    setTodoList((arr) =>
      arr.map((el) => {
        if (values._id === el._id) {
          return values;
        }
        return el;
      })
    );
  };

  const deleteTodo = (id: string) => {
    console.log(id);
    setTodoList((arr) => arr.filter(({ _id }) => _id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    console.log(todoList);
  }, [todoList]);

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
