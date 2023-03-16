"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const admin_controller_1 = require("../models/Admin/admin.controller");
function login(req, res) {
    // Check if the user credentials are valid, and retrieve the user object
    const admin = (0, admin_controller_1.getAdminData)(req);
    // Generate a JWT with the user object as the payload
    const accessToken = jsonwebtoken_1.default.sign(admin, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "120m", // Set the expiration time to 15 minutes
    });
    // Store the token in the ACCESS_TOKEN_SECRET environment variable
    process.env.ACCESS_TOKEN_SECRET = accessToken;
    // Send the token back to the client
    res.json({ accessToken });
}
//# sourceMappingURL=login.js.map