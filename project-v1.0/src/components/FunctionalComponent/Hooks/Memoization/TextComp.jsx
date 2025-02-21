import Memo, {useState} from 'react';

const TextComp = () => {
    var [text, setText] = useState("");
    return (
        <div>
            <h1>This is a number Component{text}</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <h2>The number is {text}</h2>
        </div>
    );
}
export default Memo(TextComp);