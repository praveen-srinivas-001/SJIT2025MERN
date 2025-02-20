import Home from "./Home";

const Signup = () => {
  return (
    <center>
      <h3>SignUp</h3>
      <form action={Home}>
        <table>
          <tr>
            <th>
              <label for="FirstName">First Name:</label>
            </th>
            <td>
              <input type="text" placeholder="Enter Your First Name" required />
            </td>
          </tr>
          <tr>
            <th>
              <label for="LastName">Last Name:</label>
            </th>
            <td>
              <input type="text" placeholder="Enter Your First Name" />
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
                // value="@gmail.com"
              />
            </td>
          </tr>
          <tr>
            <th>
              <label for="password">Password:</label>
            </th>
            <td>
              <input type="password" placeholder="Enter Your E-mail:" />
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
              <input type="text" placeholder="Enter your phone number" />
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
        <button>signup</button>

        <p>
          Already have an account? <a href="login.html">login</a>
        </p>
      </form>
    </center>
  );
};

export default Signup;
