import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// This middleware function will be called for protected routes
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.body.user = user;
    next();
  });
};
