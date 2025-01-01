import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
function generateToken(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      phone: user.phone,
      name: user.name,
      role: user.role,
    },

    process.env.JWT_SECRET
    //{ expiresIn: process.env.JWT_EXPIRES_IN || "1d" } // Default to '1d' if not set
  );
}

//login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }
    return res.status(200).json({ msg: 'Login successful', token: generateToken(user) });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Server error' });
  }
};
