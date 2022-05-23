import React, { useEffect, useState } from "react";
import "./App.css";
import MyTodo from "./comp/MyTodo";
import TodoList from "./comp/TodoList";
import { TODOsProps } from "./modal";
const App = () => {
  const [Todo, setTodo] = useState<string>("");
  const [TODOs, setTODOs] = useState<TODOsProps[]>([
    { id: 1653038825256, Todo: "cachbcsaj", isDone: false },
  ]);

  useEffect(() => {
    const dataV: any = localStorage.getItem("TODOs");
    console.log(JSON.parse(dataV));

    const data: any = localStorage.getItem("TODOs");
    const TODOs: any = JSON.parse(data);
    // console.log("TODOs", typeof TODOs, TODOs);
    if (TODOs) {
      setTODOs(TODOs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TODOs", JSON.stringify(TODOs));
  }, [TODOs]);

  const AddTODO = (e: React.FormEvent) => {
    e.preventDefault();
    const result = TODOs.map((e) => e.Todo.toLocaleLowerCase()).includes(Todo);
    if (Todo !== "" && !result) {
      setTODOs([...TODOs, { id: Date.now(), Todo: Todo, isDone: false }]); // can also write as setTODOs([...TODOs, { id: Date.now(), Todo, isDone: false }]);
    }
    setTodo("");
  };
  // console.log("Todo", TODOs);

  return (
    <div className="App">
      <MyTodo
        setTodo={setTodo}
        Todo={Todo}
        AddTODO={AddTODO}
        // TODOs={TODOs}
        // setTODOs={setTODOs}
      />
      <TodoList
        TODOs={TODOs}
        setTODOs={setTODOs}
        setTodo={setTodo}
        Todo={Todo}
      />
    </div>
  );
};

export default App;
