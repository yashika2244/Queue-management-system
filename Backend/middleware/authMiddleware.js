import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  try {
    // Check if Authorization header has token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user by decoded token's id, exclude password
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      // Attach user to request object
      req.user = user;
      next();
    } else {
      return res.status(401).json({ message: "Not authorized, token missing" });
    }
  } catch (err) {
    console.error("JWT Error:", err.message);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
