import React, { useState } from "react";

function Counterf() {
  const [counter, setCounter] = useState(1);
  const title = `Welcome ${counter}`;

  const addCounter = () => {
    setCounter((c) => c + 1);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={addCounter}>Klik</button>
    </div>
  );
}

export default Counterf;
