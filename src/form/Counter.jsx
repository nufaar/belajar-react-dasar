import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);
  console.info(`Render Counter ${counter}`);
  return (
    <div>
      <button
        onClick={(e) => {
          setCounter((c) => c + 1);
          setCounter((c) => c + 1);
          setCounter((c) => c + 1);
          console.log(counter);
        }}
      >
        Increment
      </button>
      <h1>Counter : {counter}</h1>
    </div>
  );
}
