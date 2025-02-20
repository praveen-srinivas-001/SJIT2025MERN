import { useState } from "react";
const UseState = () => {
  var initial = 0;
  var [num, setNum] = useState(initial);
  const handleDecreament = () => {
    setNum(num - 1);
  };
  return (
    <section>
      <p>initial value of state: {initial}</p>
      <button onClick={handleDecreament}>-</button>
      <h3>Updating State: {num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
    </section>
  );
};

export default UseState;
