const express = require("express");
const mdb = require("mongoose"); // you can also use mongodb it will also work. but, it only suggests the installed package
const dotenv = require("dotenv");
const signUp = require("./models/signupSchema");
dotenv.config();

const app = express();
app.use(express.json());
const PORT = 3001;

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.log("unable to connect due to ", err));

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Welcome to backend</h1>");
});

app.post("/signup", (req, res) => {
  try {
    const { firstname, lastname, email, password, phoneno } = req.body;
    console.log(firstname, email); 
    const newSignup = new signUp({
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
      phone_no: phoneno,
    });
    newSignup.save();
    res.status(400).json({ message: "signup successful", isSignedUp: true });
  } catch (error) {
    res.status(400).json({ message: "signup unsuccessful", isSignedUp: false });
  }
});

app.listen(PORT, () => console.log("server started successfully"));
