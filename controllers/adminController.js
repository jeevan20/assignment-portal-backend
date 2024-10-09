const Admin = require("../models/Admin");
const Assignment = require("../models/Assignment");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Admin registration
const registerAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the admin already exists
    let admin = await Admin.findOne({ email });
    if (admin) return res.status(400).json({ message: "Admin already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    admin = new Admin({
      username,
      email,
      password: hashedPassword,
      role: "admin",
    });
    await admin.save();

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true - prod and HTTPS AND false - dev and HTTP
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({
      message: "Admin registered successfully",
      admin: {
        username: admin.username,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error" });
  }
};

// Login admin
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    // Compare the passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true - prod and HTTPS AND false - dev and HTTP
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      message: "Admin logged in successfully",
      admin: { username: admin.username, email: admin.email, role: admin.role },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error" });
  }
};

// Logout admin
const logoutAdmin = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Admin logged out successfully" });
};

// Fetch assignments for admin
const getAssignments = async (req, res) => {};

// Accept an assignment
const acceptAssignment = async (req, res) => {};

// Reject an assignment
const rejectAssignment = async (req, res) => {};

// Export functions
module.exports = {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getAssignments,
  acceptAssignment,
  rejectAssignment,
};
