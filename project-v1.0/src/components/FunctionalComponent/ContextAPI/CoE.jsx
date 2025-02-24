
export const ResultPublish = createContext();
const CoE = () => {
    return (
        <ResultPublish.provider sgpa='10 sgpa' cgpa='10 cgpa'>
            <h1>Results Published.</h1>
            {/* <StydentResults sgpa='10 sgpa' cgpa='10 cgpa'/> */}
        </ResultPublish.provider>
    )
};
export default CoE;


// const CoE = () => {
//     return(
//         <h1>this is COE</h1>
//     )
// }
// export default CoE;