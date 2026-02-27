import { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(20);
  const addValue = () => {
    // console.log("suchitra", Math.random());
    if (value < 20) setValue(value + 1);
  };

  const lessValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  // let value = 20;
  return (
    <div>
      <div>My count value : {value} </div>
      <br />
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={lessValue}>less Value</button>
    </div>
  );
};

export default Counter;
