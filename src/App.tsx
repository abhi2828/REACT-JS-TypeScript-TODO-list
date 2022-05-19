import React, { useState } from "react";
import "./App.css";
import MyTodo from "./comp/MyTodo";
import TodoList from "./comp/TodoList";
import { TODOsProps } from "./modal";

const App = () => {
  const [Todo, setTodo] = useState<string>("");
  const [TODOs, setTODOs] = useState<TODOsProps[]>([]);

  const AddTODO = (e: React.FormEvent) => {
    e.preventDefault();
    if (Todo !== "") {
      setTODOs([...TODOs, { id: Date.now(), Todo: Todo, isDone: false }]); // can also write as setTODOs([...TODOs, { id: Date.now(), Todo, isDone: false }]);
    }
    setTodo("");
  };
  console.log("Todo", TODOs);

  return (
    <div className="App">
      <MyTodo
        setTodo={setTodo}
        Todo={Todo}
        AddTODO={AddTODO}
        // TODOs={TODOs}
        // setTODOs={setTODOs}
      />
      <TodoList TODOs={TODOs} setTODOs={setTODOs} />
    </div>
  );
};

export default App;
