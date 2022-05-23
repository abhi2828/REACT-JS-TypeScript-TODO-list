import React, { useEffect, useRef } from "react";
import { TODOsProps } from "../modal";
import TodoList from "./TodoList";

interface TodoProps {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  Todo: string;
  AddTODO: (e: React.FormEvent) => void;
}
const MyTodo: React.FC<TodoProps> = ({ Todo, setTodo, AddTODO }) => {
  const inputRef = useRef<HTMLInputElement>(null); // when i didn't enter null here i was geting error at line 33 y??

  const onChangeHandler = (e: { target: HTMLInputElement }) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <h1>My TODOs</h1>
      <form
        onSubmit={(e) => {
          AddTODO(e);
          inputRef.current?.blur();
          inputRef.current?.focus(); // is it right to write methodes in this way ?? but i'm getting what i wanted
        }}
      >
        <input
          ref={inputRef}
          className="input_Field"
          type="text"
          placeholder="Enter TODOs"
          value={Todo}
          onChange={onChangeHandler}
        />
        <input className="input_Add pointer" type="submit" value="ADD" />
      </form>
    </>
  );
};

export default MyTodo;
