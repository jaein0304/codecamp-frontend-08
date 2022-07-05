import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  function counterUp() {
    setCount(count + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={counterUp}>카운트증가</button>
    </>
  );
}
