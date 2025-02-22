import { useState } from "react";
const NumComp = () => {
    var initial = 0;
    var [number, setNumber] = useState(initial);
    return (
        <div>
            <h1>This is a number Component:{number}</h1>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <h2>The number is {number}</h2>
        </div>
    );
}
export default NumComp;