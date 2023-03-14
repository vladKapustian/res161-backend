import { Request, Response } from "express";
import sequelize from "..";
import { Category } from "../Categories/categories.model";
import { Image } from "../Images/image.model";
import { Attribute } from "../Attributes/attributes.model";
import { ProductFull } from "./productFull.model";

export const getProductFull = async (req: Request, res: Response) => {
  if (req.params.slug) {
    try {
      const product = await ProductFull.findOne({
        where: {
          id: req.params.id,
        },
        include: [Category, Image, Attribute],
      });
      //   const category = await Category.findOne({ where: {id : product.category_id } })

      //   product.category = {
      //     id : category.id,
      //     slug: category.slug,
      //     name: category.name,
      //   };

      res.status(200).send(product);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(404);
  }
};

export const createProductFull = async (req: Request, res: Response) => {
  if (Object.keys(req.body).length) {
    try {
      await ProductFull.create(req.body);
      res.status(200);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(422);
  }
};

export const deleteProductFull = async (req: Request, res: Response) => {
  if (req.params.slug) {
    try {
      await ProductFull.destroy({
        where: {
          slug: req.params.slug,
        },
      });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(422);
  }
};

export const updateProductFull = async (req: Request, res: Response) => {
  if (Object.keys(req.body).length) {
    try {
      await ProductFull.update(req.body, {
        where: {
          id: req.params.Id,
        },
      });
      res.status(200);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(422).send("Не удалось обновить товар");
  }
};
