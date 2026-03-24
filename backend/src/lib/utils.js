import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // For development/mobile testing, make cookies more permissive
  const isDevelopment = process.env.NODE_ENV !== "production";

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: !isDevelopment, // Allow JS access in development for mobile testing
    sameSite: isDevelopment ? "lax" : "none",
    secure: !isDevelopment,
    path: "/",
  });

  return token;
};
