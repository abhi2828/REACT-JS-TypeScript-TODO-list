import React from "react";
import { TODOsProps } from "../modal";
interface TodoList {
  TODOs: TODOsProps[];
  setTODOs: React.Dispatch<React.SetStateAction<TODOsProps[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  Todo: string;
}
const TodoList = ({ TODOs, setTODOs, Todo, setTodo }: TodoList) => {
  // console.log("first", typeof TODOs, TODOs);

  const editTodo = () => {};

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
                  onClick={editTodo}
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
