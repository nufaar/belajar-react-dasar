import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setshow2] = useState(true);

  function handleChange(e) {
    setshow2(e.target.checked);
  }

  return (
    <div>
      {show2 ? <Counter name="Nufa" /> : <Counter name="Eko" />}
      <input type="checkbox" checked={show2} onChange={handleChange} />{" "}
      Tampilkan Counter 2
    </div>
  );
}
