"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsPublicList = void 0;
const image_model_1 = require("../Images/image.model");
const categories_model_1 = require("../Categories/categories.model");
const productFull_model_1 = require("./productFull.model");
const getProductsPublicList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productFull_model_1.ProductFull.findAll({
            attributes: ["id", "name", "category", "image"],
            include: [categories_model_1.Category, image_model_1.Image],
        });
        //   const category = await Category.findOne({ where: {id : product.category_id } })
        //   product.category = {
        //     id : category.id,
        //     slug: category.slug,
        //     name: category.name,
        //   };
        res.status(200).send(products);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.getProductsPublicList = getProductsPublicList;
//# sourceMappingURL=productPublicList.controller.js.map