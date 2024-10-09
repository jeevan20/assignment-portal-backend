const express = require("express");
const router = express.Router();

// Route for user registration
// @route   POST /api/user/register
// @desc    Register a new user
router.post("/register", registerUser);

// Route for user login
// @route   POST /api/user/login
// @desc    Log in as a user
router.post("/login", loginUser);

// Route for user logout
// @route   POST /api/user/logout
// @desc    Log out a logged-in user and clear the token
router.post("/logout", logoutUser);

// Route to fetch all admins
// @route   GET /api/user/admins
// @desc    Fetch all registered admins
router.get("/admins", getAllAdmins);

// Route for uploading an assignment
// @route   POST /api/user/upload
// @desc    Upload a new assignment by a user
router.post("/upload", uploadAssignment);

module.exports = router;
