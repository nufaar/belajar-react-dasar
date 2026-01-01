import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setshow2] = useState(true);

  function handleChange(e) {
    setshow2(e.target.checked);
  }

  return (
    <div>
      {/* {show2 && <Counter name="Nufa" />}
      {!show2 && <Counter name="Eko" />} */}
      {show2 ? (
        <Counter key="Nufa" name="Nufa" />
      ) : (
        <Counter key="Eko" name="Eko" />
      )}
      <input type="checkbox" checked={show2} onChange={handleChange} />{" "}
      Tampilkan Counter 2
    </div>
  );
}
