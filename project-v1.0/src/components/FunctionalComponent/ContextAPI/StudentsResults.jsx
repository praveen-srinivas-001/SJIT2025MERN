import { useContext } from "react";
import {ResultPublish} from "./CoE"

const result = useContext(resultPublish)
const StydentResults = (res) => {
    return (
        <div>
            <Exam />
            <h2>Student Results</h2>
            <p>SGPA: {res.sgpa}</p>
            <p>CGPA: {res.cgpa}</p>
        </div>
    )
}
export default StydentResults;