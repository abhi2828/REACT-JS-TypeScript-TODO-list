import React, { useState } from "react";
import { TodoInputProps } from "../modal";

const TodoList = ({ Todos, setTodos }: any) => {
  const [EditTodo, setEditTodo] = useState<string>();

  const editTodo = (id: number) => {
    setTodos(
      Todos.map((ele: TodoInputProps) => {
        return ele.id === id ? { ...ele, isEdit: !ele.isEdit } : ele;
      })
    );
  };

  const inputEdit = (event: React.FormEvent<HTMLInputElement>, id: number) => {
    event.preventDefault();
    setTodos(
      Todos.map((ele: TodoInputProps) => {
        return ele.id === id
          ? { ...ele, TodoInput: event.currentTarget.value }
          : ele;
      })
    );
  };

  const DeleteTodo = (id: number) => {
    setTodos(Todos.filter((ele: TodoInputProps) => ele.id !== id));
  };

  const CompleteTodo = (id: number) => {
    setTodos(
      Todos.map((ele: TodoInputProps) => {
        return ele.id === id ? { ...ele, isDone: !ele.isDone } : ele;
      })
    );
  };
  return (
    <>
      {Todos &&
        Todos?.map((e: TodoInputProps) => {
          return (
            <form
              className="todos_single"
              key={e.id}
              onSubmit={(event: any) => {
                event.preventDefault();
                console.log("abhay", e.id);
                setTodos(
                  Todos.map((ele: TodoInputProps) => {
                    return ele.id === e.id ? { ...ele, isEdit: false } : ele;
                  })
                );
              }}
            >
              {e.isEdit ? (
                <input
                  className="todo_text"
                  value={e.TodoInput}
                  onChange={(event) => inputEdit(event, e.id)}
                />
              ) : e.isDone ? (
                <s className="todo_text">{e.TodoInput}</s>
              ) : (
                <span className="todo_text">{e.TodoInput}</span>
              )}

              <span className="icon">
                <i
                  className="fa fa-pencil-square-o"
                  onClick={() => editTodo(e.id)}
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-trash-o"
                  aria-hidden="true"
                  onClick={() => DeleteTodo(e.id)}
                ></i>
                <i
                  className="fa fa-check-square-o"
                  aria-hidden="true"
                  onClick={() => CompleteTodo(e.id)}
                ></i>
              </span>
            </form>
          );
        })}
    </>
  );
};

export default TodoList;
