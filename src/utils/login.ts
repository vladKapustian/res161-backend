import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { getAdminData } from "../models/Admin/admin.controller";

function login(req: Request, res: Response) {
  // Check if the user credentials are valid, and retrieve the user object
  const admin = getAdminData(req);

  // Generate a JWT with the user object as the payload
  const accessToken = jwt.sign(admin, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "120m", // Set the expiration time to 15 minutes
  });

  // Store the token in the ACCESS_TOKEN_SECRET environment variable
  process.env.ACCESS_TOKEN_SECRET = accessToken;

  // Send the token back to the client
  res.json({ accessToken });
}
