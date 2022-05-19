import React, { useState } from "react";

const Todo = () => {
  const [TODO, setTODO] = useState("");
  const [TODOList, setTODOList] = useState<string[]>([]);

  let AddTODO = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTODOList([...TODOList, TODO]);
    setTODO("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTODO(e.target.value);
  };

  return (
    <>
      <h1>TODO List</h1>

      <form onSubmit={AddTODO}>
        <input
          type="text"
          placeholder="Enter TODO "
          value={TODO}
          onChange={handleChange}
        />
        {/* <input type="button" value="sumbit" onSubmit={AddTODO} /> */}
      </form>

      <ul>
        {TODOList.map((e) => {
          return <li key={e}> {e}</li>;
        })}
      </ul>
    </>
  );
};

export default Todo;
