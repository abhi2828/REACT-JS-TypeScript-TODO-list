import React from "react";
import { TODOsProps } from "../modal";
interface TodoList {
  TODOs: TODOsProps[];
  setTODOs: React.Dispatch<React.SetStateAction<TODOsProps[]>>;
}
const TodoList = ({ TODOs, setTODOs }: TodoList) => {
  return (
    <>
      <ol>
        {TODOs.map((e) => {
          return (
            <div className="itemsList" key={e.id}>
              <li>{e.Todo}</li>
            </div>
          );
        })}
      </ol>
    </>
  );
};

export default TodoList;
