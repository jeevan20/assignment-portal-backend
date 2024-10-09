const express = require("express");
const {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getAssignments,
  acceptAssignment,
  rejectAssignment,
} = require("../controllers/adminController");

const router = express.Router();

// Route for admin registration
// @route   POST /api/admin/register
// @desc    Register a new admin
router.post("/register", registerAdmin);

// Route for admin login
// @route   POST /api/admin/login
// @desc    Log in as an admin
router.post("/login", loginAdmin);

// Route for admin logout
// @route   POST /api/admin/logout
// @desc    Log out a logged-in admin and clear the token
router.post("/logout", logoutAdmin);

// Route to view assignments tagged to the logged-in admin
// @route   GET /api/admin/assignments
// @desc    View all assignments assigned to the current admin
router.get("/assignments", getAssignments);

// Route to accept an assignment
// @route   POST /api/admin/assignment/:id/accept
// @desc    Accept a specific assignment by ID
router.post("/assignment/:id/accept", acceptAssignment);

// Route to reject an assignment
// @route   POST /api/admin/assignment/:id/reject
// @desc    Reject a specific assignment by ID
router.post("/assignment/:id/reject", rejectAssignment);

module.exports = router;
