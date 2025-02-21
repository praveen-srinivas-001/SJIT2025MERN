import { useEffect, useState } from "react";

const useMemorize = (key, value) => {
  var [text, setText] = useState(() => {
    var jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) {
      console.log(JSON.parse(jsonValue));
      return JSON.parse(jsonValue);
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(text));
  }, [key, text]);
  return [text, setText];
};

export default useMemorize;
