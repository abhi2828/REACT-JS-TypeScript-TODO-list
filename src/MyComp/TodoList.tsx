import React from "react";

const TodoList = ({ Todos }: any) => {
  return (
    <>
      {Todos &&
        Todos?.map((e: any) => {
          return (
            <form className="todos_single" key={e.id}>
              <span className="todo_text">{e.TodoInput}</span>

              <span className="icon">
                <i
                  className="fa fa-pencil-square-o"
                  // onClick={(ev: any) => editTodo(ev, e.id)}
                  aria-hidden="true"
                ></i>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
                <i className="fa fa-check-square-o" aria-hidden="true"></i>
              </span>
            </form>
          );
        })}
    </>
  );
};

export default TodoList;
