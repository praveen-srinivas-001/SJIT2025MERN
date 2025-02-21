import { useCallback, useMemo, useState } from "react";
function slowFunction(num) {
    for(let time=1; time < 50000; time++){
        return num*2;
    }
}
const UseCallback = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingUpNumber = useCallback(() => {
    return slowFunction(number)
  }, [number]);
  return (
    <>
    <button onClick={() => {}}>theme</button>
    <div style={styling}>
      <h1>This is useMemo Example</h1>
      Number Box:{" "}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>The Number is {number}</h2>
      <h2>The Number is {doublingUpNumber}</h2>
    </div>
    </>
  );
};

export default UseCallback;
