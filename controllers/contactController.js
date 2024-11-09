const asyncHandler = require("express-async-handler");

// @desc get all contacts
// @route Get /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message:'get all contacts'});
});

// @desc create contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message:'create contacts'});
});

// @desc get single contact
// @route Get /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message:`get single contacts ${req.params.id}`});
});

// @desc update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message:`update contact for ${req.params.id}`});
});

// @desc delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message:`delete contacts for ${req.params.id}`});
});


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}