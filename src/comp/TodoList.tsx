import React from "react";
import { TODOsProps } from "../modal";
interface TodoList {
  TODOs: TODOsProps[];
  setTODOs: React.Dispatch<React.SetStateAction<TODOsProps[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  Todo: string;
}
const TodoList = ({ TODOs, setTODOs, Todo, setTodo }: TodoList) => {
  const editTodo = (e: { target: HTMLInputElement }, i: any) => {
    console.log("test");
  };

  return (
    <>
      {/* <ul> */}
      {TODOs &&
        TODOs?.map((e) => {
          return (
            <form className="todos_single" key={e.id}>
              <span className="todo_text">{e.Todo}</span>

              <span className="icon">
                <i
                  className="fa fa-pencil-square-o"
                  onClick={(ev: any) => editTodo(ev, e.id)}
                  aria-hidden="true"
                ></i>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
                <i className="fa fa-check-square-o" aria-hidden="true"></i>
              </span>
            </form>
          );
        })}
      {/* </ul> */}
    </>
  );
};

export default TodoList;
