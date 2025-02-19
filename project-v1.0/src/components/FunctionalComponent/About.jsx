// import { funtion } from folder
import { useState } from "react";

const About = () => {
  var initial = 0;
  var [num, setNum] = useState(initial);

  function handleDecreament(){
      setNum(num-1);
  }

  return (
    <div>
      <h1>About</h1>
      <p>initial value of state: {initial}</p>
      <button onClick={handleDecreament}>-</button>
      <h3>Updating State: {num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default About;
