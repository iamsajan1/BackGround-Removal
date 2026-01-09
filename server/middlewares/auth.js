import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "Login please" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.decode(token);

    if (!decoded || !decoded.clerkId) {
      return res.json({ success: false, message: "Invalid token" });
    }

    req.clerkId = decoded.clerkId;

    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
