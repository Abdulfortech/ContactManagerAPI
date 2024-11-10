const asyncHandler = require("express-async-handler");
// @desc create account
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are required");
    }
    
    res.json({message: "register user"});
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