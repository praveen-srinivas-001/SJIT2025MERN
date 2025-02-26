const express = require("express");
const mdb = require("mongoose"); // you can also use mongodb it will also work. but, it only suggests the installed package
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const signUp = require("./models/signupSchema");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3001;

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.log("unable to connect due to ", err));

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Welcome to backend</h1>");
});

app.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password, phoneno } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newSignup = new signUp({
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: hashedPassword,
      phone_no: phoneno,
    });
    newSignup.save();
    res.status(400).json({ message: "signup successful", isSignedUp: true });
  } catch (error) {
    res.status(400).json({ message: "signup unsuccessful", isSignedUp: false });
  }
});

app.post("/login", async (req, res) => {
  console.log("req.body is: ", req.body);

  try {
    const { email, password } = req.body;
    const existingUser = await signUp.findOne({ email: email });
    console.log(existingUser);
    if (existingUser !== null) {
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (isValidPassword) {
        res.status(200).json({ message: "login successful", islogin: true });
      } else {
        res.status(200).json({ message: "invalid password", islogin: false });
      }
    } else {
      res.status(404).json({ message: "user not found", islogin: false });
    }
  } catch (error) {
    res.status(404).json({ message: "login unsuccessful", islogin: false });
  }
});

app.get("/getlogindet", async (req, res) => {
  const users = await signUp.find();
  console.log(users);
  res.json({ msg: "users found" });
});

app.listen(PORT, () => console.log("server started successfully"));
