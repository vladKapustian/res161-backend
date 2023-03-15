import sequelize from "..";
import { Request, Response } from "express";
import { Image, ImageSize, IImage } from "../Images/image.model";
import { Category } from "../Categories/categories.model";
import { ProductFull } from "./productFull.model";

export interface IProductPublicList {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  image: Record<ImageSize, IImage>;
}

export const getProductsPublicList = async (req: Request, res: Response) => {
  try {
    const products = await ProductFull.findAll({
      attributes: ["id", "name", "category", "image"],
      include: [Category, Image],
    });

    //   const category = await Category.findOne({ where: {id : product.category_id } })

    //   product.category = {
    //     id : category.id,
    //     slug: category.slug,
    //     name: category.name,
    //   };

    res.status(200).send(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
