const mdb = require('mongoose')

const signupSchema = mdb.Schema({
    first_name : String,
    last_name : String,
    email : String,
    password : String,
    phone_no : Number
})

const signup_schema = mdb.model('signup', signupSchema);

module.exports = signup_schema;