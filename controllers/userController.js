const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel"); 
// @desc create account
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are required");
    }
    const userAvailable = await User.findOne({email});
    if (userAvailable){
        res.status(400);
        throw new Error("User already exist");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);
    // creating user
    const user = await User.create({
        username,
        email,
        password : hashedPassword,
    });
    console.log(`User created ${user}`);
    // returning selected data
    if(user){
        res.status(201).json({ _id: user.id, email: user.email });
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    // res.json({message: "register user"});
});

// @desc login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "login "});
});

// @desc current user
// @route POST /api/users/curremt
// @access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: "current user info "});
});


module.exports = 
{
    registerUser,
    loginUser,
    currentUser
};