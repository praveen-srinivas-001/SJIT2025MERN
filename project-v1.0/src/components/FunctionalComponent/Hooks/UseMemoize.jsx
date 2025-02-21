import useMemoize from "./CustomHooks/MemorizingHook";
const UseMemoize = () => {
  var [custID, setCustID] = useMemoize("CustomerID", "");
  var [pass, setPass] = useMemoize("Password", "");

  const handleEvent = () => {};

  return (
    <div>
      <h1>This is the custom hook design using useState and useEffect</h1>
      CustomerID:{" "}
      <input
        type="text"
        value={custID}
        onChange={(e) => {
          setCustID(e.target.value);
        }}
      />{" "}
      <br />
      Password:{" "}
      <input
        type="text"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />{" "}
      <br />
      <button>summa login</button>
    </div>
  );
};
export default UseMemoize;
