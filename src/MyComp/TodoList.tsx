import React, { useState } from "react";
import { toast } from "react-toastify";
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

    let data = Todos.map((ele: any) => {
      return (
        ele.TodoInput.trim().toLocaleLowerCase() ===
        event.currentTarget.value.trim().toLocaleLowerCase()
      );
    });
    console.log("data", data.includes(true), event.currentTarget.value);

    if (event.currentTarget.value !== "" && !data.includes(true)) {
      setTodos(
        Todos.map((ele: TodoInputProps) => {
          return ele.id === id
            ? { ...ele, TodoInput: event.currentTarget.value }
            : ele;
        })
      );
    }
  };

  const DeleteTodo = (id: number) => {
    setTodos(Todos.filter((ele: TodoInputProps) => ele.id !== id));
    toast.success("Todo deleted", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
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
