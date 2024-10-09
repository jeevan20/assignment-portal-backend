const express = require("express");
const {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getAssignments,
  acceptAssignment,
  rejectAssignment,
} = require("../controllers/adminController");
const auth = require("../middleware/auth");
const router = express.Router();
const {
  registerValidation,
  loginValidation,
  validate,
} = require("../utils/userValidation");

// Route for admin registration
// @route   POST /api/admin/register
// @desc    Register a new admin
router.post("/register", registerValidation, validate, registerAdmin);

// Route for admin login
// @route   POST /api/admin/login
// @desc    Log in as an admin
router.post("/login", loginValidation, validate, loginAdmin);

// Route for admin logout
// @route   POST /api/admin/logout
// @desc    Log out a logged-in admin and clear the token
router.post("/logout", auth("admin"), logoutAdmin);

// Route to view assignments tagged to the logged-in admin
// @route   GET /api/admin/assignments
// @desc    View all assignments assigned to the current admin
router.get("/assignments", auth("admin"), getAssignments);

// Route to accept an assignment
// @route   POST /api/admin/assignment/:id/accept
// @desc    Accept a specific assignment by ID
router.post("/assignment/:id/accept", auth("admin"), acceptAssignment);

// Route to reject an assignment
// @route   POST /api/admin/assignment/:id/reject
// @desc    Reject a specific assignment by ID
router.post("/assignment/:id/reject", auth("admin"), rejectAssignment);

module.exports = router;
