import { Admin } from "./admin.model";
import { Request, Response } from "express";

export const getAdminData = async (req: Request) => {
  try {
    const adminData = await Admin.findOne({
      where: {
        login: req.body.login,
        password: req.body.login,
      },
    });
    return adminData;
  } catch (error) {
    return error;
  }
};
