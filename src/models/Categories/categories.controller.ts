import { Category } from "./categories.model";
import { Request, Response } from "express";
import { Image } from "../Images/image.model";
import upload from "../../utils/multer";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  if (Object.keys(req.body).length) {
    try {
      await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send();
    } catch (error) {
      res.status(422).send(error);
    }
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createCategory = async (req: Request, res: Response) => {
  if (Object.keys(req.body).length || req.file) {
    try {
      await Category.create(req.body);
    } catch (error) {
      res.status(422).send(error);
    }
  } else {
    res.status(500).send();
  }
};
