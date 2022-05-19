import React, { useRef, useState } from "react";

const RefHook = () => {
  const addINputRef = useRef<HTMLInputElement | null>(null);
  const [TODOList, setTODOList] = useState<string[]>([]);

  let AddTODO = () => {
    // let data = addINputRef.current?.value;
    // setTODOList([...TODOList, data]);  // if im using teying to use optional chaning its showing error y ??

    if (addINputRef.current) {
      let data = addINputRef.current.value;
      setTODOList([...TODOList, data]);
    }
  };

  return (
    <>
      <h1>TODO List</h1>

      {/* <form onSubmit={AddTODO}> */}
      <input type="text" placeholder="Enter TODO " ref={addINputRef} />
      <input type="button" value="sumbit" onClick={AddTODO} />
      {/* </form> */}

      <ul>
        {TODOList.map((e) => {
          return <li key={e}> {e}</li>;
        })}
      </ul>
    </>
  );
};

export default RefHook;
