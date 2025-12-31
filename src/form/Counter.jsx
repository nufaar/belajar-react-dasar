import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={(e) => {
          setCounter(counter + 1);
          setCounter(counter + 1);
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        Increment
      </button>
      <h1>Counter : {counter}</h1>
    </div>
  );
}
