const NumComp = () => {
    var initial = 0;
    var [number, setNumber] = useState(initial);
    return (
        <div>
            <h1>This is a number Component{number}</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <h2>The number is {number}</h2>
        </div>
    );
}
export default NumComp;