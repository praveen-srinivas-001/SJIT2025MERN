import { useEffect, useState } from "react";

const UseEffect = () => {
  const [text, setText] = useState("Hi");
  const [text1, setText1] = useState("Hello");

  useEffect(() => {
    console.log(text);
    // console.log(text1);
  }, [text]);

  return (
    <section>
      <h1>This is use Effect Example</h1>
      Type your text :{" "}
      <input 
      type="text" 
      value={text}
      onChange={(event) => setText(event.target.value)} />
    </section>
  );
};
export default UseEffect;
