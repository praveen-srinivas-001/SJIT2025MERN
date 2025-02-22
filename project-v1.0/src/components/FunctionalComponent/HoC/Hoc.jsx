import Button from './Button'
import trackingMyButtonComp from './trackingMyButtonComp'

const HoC = () => {
    const ButtonTrack = trackingMyButtonComp(Button);
    return(
        <div>
            <h1>Welcome to Higher Order Components</h1>
            <Button value={"Login"}/> <br />
            <ButtonTrack value={"Login"} trackingInfo = {{"CustID" : "293847", "password": "passpass"}}/>
        </div>
    )
}
export default HoC;