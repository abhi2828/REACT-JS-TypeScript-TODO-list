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
    // let unique = [...new Set(Todos.map((ele) => ele.TodoInput))]
  }, [Todos]);

  const addTodo = (e: { target: HTMLInputElement }) => {
    setTodoInput(e.target.value);
  };

  const submit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    let data = Todos.map((ele) => {
      return (
        ele.TodoInput.trim().toLocaleLowerCase() ===
        TodoInput.trim().toLocaleLowerCase()
      );
    });
    console.log("data", data.includes(true));

    if (TodoInput !== "" && !data.includes(true)) {
      setTodos((Todos) => [
        ...Todos,
        {
          id: Date.now(),
          TodoInput: TodoInput.trim(),
          isDone: false,
          isEdit: false,
        },
      ]);
    }
    setTodoInput("");
  };

  return (
    <>
      <h2>My TODOs</h2>
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

      <TodoList Todos={Todos} setTodos={setTodos} />
    </>
  );
};

export default ToDo;
