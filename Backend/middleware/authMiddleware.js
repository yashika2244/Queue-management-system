
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";


// const verifyToken = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

//     const user = await User.findById(decoded.id).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     req.user = user;
//     req.userId = user._id;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// export default verifyToken;

import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import Staff from "../models/Staff.js";
dotenv.config();

export const verifyToken = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]?.trim(); // Trim after extraction

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.staff = await Staff.findById(decoded.id).select("-password");
      if (!req.staff) {
        return res.status(401).json({ message: "User not found for this token" });
      }

      next();
    } catch (error) {
      console.error(" Token Error:", error.message);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    console.log(" No Authorization Header");
    return res.status(401).json({ message: "No token provided" });
  }
};

//  Admin role check
export const adminOnly = (req, res, next) => {
  if (req.staff && req.staff.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admin access only" });
  }
};
