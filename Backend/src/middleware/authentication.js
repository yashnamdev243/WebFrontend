import jwt from "jsonwebtoken";
import config from "../config/config.json" assert { type: "json" };

export const checkJwtToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      status: 401,
      error: true,
      message: "Token required",
    });
  }

  jwt.verify(token, config.development.JWT_ADMIN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: 401,
        error: true,
        message: "Unauthorized User",
      });
    }
    req.user = decoded;
    next();
  });
};

export const getFileUrl = (req, file) => {
  const host = req.headers.host;
  const protocol = req.protocol;
  if (file) {
    return `${protocol}://${host}/documents/${file}`;
  }
};
export const getImageUrl = (req, file) => {
  const host = req.headers.host;
  const protocol = req.protocol;
  if (file) {
    return `${protocol}://${host}/images/${file}`;
  }
};
