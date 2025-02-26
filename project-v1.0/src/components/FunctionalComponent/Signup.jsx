import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState(0);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("entered handlesubmit");
      const req = await axios.post("http://localhost:3001/signup", {
        first_name: first,
        last_name: last,
        email: email,
        password: pass,
        phone_no: phone,
      });
      console.log(req.data);
      const msg = req.data.message;
      const isSignedup = req.data.isSignUp;
      if (isSignedup) {
        alert(msg);
        navigate("/login");
      } else {
        alert(msg);
      }
    } catch {
      alert("login unsuccessful");
    }
  };
  return (
    <center>
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <th>
              <label for="FirstName">First Name:</label>
            </th>
            <td>
              <input
                type="text"
                placeholder="Enter Your First Name"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label for="LastName">Last Name:</label>
            </th>
            <td>
              <input
                type="text"
                placeholder="Enter Your First Name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label for="email">Email:</label>
            </th>
            <td>
              <input
                type="email"
                placeholder="Enter Your E-mail:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label for="password">Password:</label>
            </th>
            <td>
              <input
                type="password"
                placeholder="Enter Your E-mail:"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label for="cnfPassword">Confirm Password: </label>
            </th>
            <td>
              <input type="password" placeholder="re-Enter your password" />
            </td>
          </tr>
          <tr>
            <th>
              <label for="dob">Date Of Birth: </label>
            </th>
            <td>
              <input type="date" name="" id="" />
            </td>
          </tr>
          <tr>
            <th>
              <label for="Phone">Mobile Number</label>
            </th>
            <td>
              <input
                type="Number"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label for="gender">Gender: </label>
            </th>
            <td>
              <input type="radio" name="gender" />
              Male
              <input type="radio" name="gender" />
              Female
              <input type="radio" name="gender" />
              Others
            </td>
          </tr>
        </table>
        <button type="submit">signup</button>

        <p>
          Already have an account? <a href="login.html">login</a>
        </p>
      </form>
    </center>
  );
};

export default Signup;
