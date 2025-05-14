import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, login again",
      });
    }
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    if (id) {
      req.userId = id;
    } else {
      return res.status(401).json({
        success: false,
        message: "Not authorized, login again",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export default userAuth;
