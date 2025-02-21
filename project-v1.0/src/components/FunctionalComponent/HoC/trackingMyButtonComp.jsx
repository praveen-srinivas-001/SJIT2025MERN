/* eslint-disable */
const trackingMyButtonComp = (Component) => {
    return((props) => {
        const handleClick = () => {
            alert("tracking info on clicking this button" + props.trackingInfo.Component)
        }
        return(
            <form onClick={handleClick}> 
                Email: <input type="text" />
                Password: <input type="text" />
                <Component {...props}/>    
            </form>
            
        );
    });
}