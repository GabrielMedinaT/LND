import React, { useState } from "react";
import "./Counter.css";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  function increment() {
    setCounter(counter + 1);
  }
  function ponerCero() {
    setCounter(0);
  }

  return (
    <div className="principal">
      <button onClick={ponerCero}>Poner en cero</button>
      <button onClick={increment}>Incrementar</button> <p>{counter}</p>
    </div>
  );
};

export default Counter;
