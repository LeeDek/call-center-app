"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
var SECRET = process.env.SECRET;
var secret = SECRET;
// import {UserModel} from "../users/userModel"
var jwt = require('jwt-simple');
function isAdmin(req, res, next) {
    // Get the token from the request headers or cookies
    var token = req.headers.authorization || req.cookies.user;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        // Decode and verify the token
        var decodedToken = jwt.decode(token, secret);
        // Check if the user has admin privileges
        if (decodedToken.isAdmin) {
            // User is an admin, proceed to the next middleware or route handler
            req.user = decodedToken;
            next();
        }
        else {
            // User is not an admin, return unauthorized
            return res.status(401).json({ error: "Unauthorized" });
        }
    }
    catch (error) {
        // Token verification failed
        return res.status(401).json({ error: "Unauthorized" });
    }
}
exports.isAdmin = isAdmin;
