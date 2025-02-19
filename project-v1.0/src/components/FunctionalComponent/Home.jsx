
function Home(properties) {    
    var styling = {
        color: 'blue',
        backgroundColor: 'yellow',
        textAlign: 'center',
    } 
    var a = 10;
    return(
        <div>
            <h1 style={styling}>Home Page</h1>
            <h2> I am going to pass props in the next tag</h2>
            <h3>props: {properties.properties}, {properties.sjit}</h3>
            
            {/* {console.log(styling)} */}
            
        </div>
    )
}

export default Home;