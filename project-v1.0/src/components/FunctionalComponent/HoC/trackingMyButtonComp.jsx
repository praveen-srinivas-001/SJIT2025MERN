/* eslint-disable */
const trackingMyButtonComp = (Component) => {
    return (props) => {
    const handleClick = () => {
        alert("tracking info on clicking this button " + props.trackingInfo.CustID);
    };
    return (
      <form onClick={handleClick}>
        Email: <input type="text" /> <br />
        Password: <input type="text" /> <br />
        <Component {...props} />
      </form>
    );
  };
};
export default trackingMyButtonComp;
