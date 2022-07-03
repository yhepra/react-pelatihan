import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button dipencet");
  }

  return (
    <div>
      <button onClick={clickHandler}>Klik</button>
    </div>
  );
}

export default FunctionClick;
