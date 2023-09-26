const {SECRET} = process.env
const secret = SECRET
// import {UserModel} from "../users/userModel"

const jwt = require('jwt-simple');

export function isAdmin(req, res, next) {
  // Get the token from the request headers or cookies
  const token = req.headers.authorization || req.cookies.user;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Decode and verify the token
    const decodedToken = jwt.decode(token, secret);

    // Check if the user has admin privileges
    if (decodedToken.isAdmin) {
      // User is an admin, proceed to the next middleware or route handler
      req.user = decodedToken;
      next();
    } else {
      // User is not an admin, return unauthorized
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    // Token verification failed
    return res.status(401).json({ error: "Unauthorized" });
  }
}