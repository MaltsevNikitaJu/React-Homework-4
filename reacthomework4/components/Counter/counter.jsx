import { useState } from "react";

function HandleCounter() {
  const [counter, setCounter] = useState(0);
  const [multiplier, setMultiplier] = useState("");

  function handleCounter(flag) {
    switch (flag) {
      case "increase":
        if (multiplier !== "") {
          return setCounter((counter) => counter + parseInt(multiplier));
        } else {
          return setCounter((counter) => counter + 1);
        }
      case "decrease":
        if (multiplier !== "") {
          return setCounter((counter) => counter - parseInt(multiplier));
        } else {
          return setCounter((counter) => counter - 1);
        }
      default:
        return 0;
    }
  }

  return (
    <div className="counterDiv">
      <h1>Счетчик</h1>
      <h1>{counter}</h1>
      Введите множитель:{" "}
      <input onChange={(e) => setMultiplier(e.target.value)} />
      <button onClick={() => handleCounter("increase")}>Плюс</button>
      <button onClick={() => handleCounter("decrease")}>Минус</button>
    </div>
  );
}

export default HandleCounter;
