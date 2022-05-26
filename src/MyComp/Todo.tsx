import React, { useEffect, useState } from "react";
import { TodoInputProps } from "../modal";
import TodoList from "./TodoList";

const ToDo = () => {
  const [Todos, setTodos] = useState<TodoInputProps[]>(() => {
    const savedTodos = localStorage.getItem("TodoList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [TodoInput, setTodoInput] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(Todos));
  }, [Todos]);

  const addTodo = (e: { target: HTMLInputElement }) => {
    setTodoInput(e.target.value);
  };

  const submit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (TodoInput !== "") {
      setTodos((Todos) => [
        ...Todos,
        {
          id: Date.now(),
          TodoInput,
          isDone: false,
        },
      ]);
    }
    setTodoInput("");
  };

  return (
    <>
      <form onSubmit={(e: any) => submit(e)}>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={addTodo}
          value={TodoInput}
          className="TodoText"
        />
        <input type="submit" value="Add" className="input_Add" />
      </form>

      <TodoList Todos={Todos} />
    </>
  );
};

export default ToDo;