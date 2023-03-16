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
exports.updateProductFull = exports.deleteProductFull = exports.createProductFull = exports.getProductFull = void 0;
const categories_model_1 = require("../Categories/categories.model");
const image_model_1 = require("../Images/image.model");
const attributes_model_1 = require("../Attributes/attributes.model");
const productFull_model_1 = require("./productFull.model");
const getProductFull = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.slug) {
        try {
            const product = yield productFull_model_1.ProductFull.findOne({
                where: {
                    slug: req.params.slug,
                },
                include: [categories_model_1.Category, image_model_1.Image, attributes_model_1.Attribute],
            });
            //   const category = await Category.findOne({ where: {id : product.category_id } })
            //   product.category = {
            //     id : category.id,
            //     slug: category.slug,
            //     name: category.name,
            //   };
            res.status(200).send(product);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(404);
    }
});
exports.getProductFull = getProductFull;
const createProductFull = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length) {
        try {
            yield productFull_model_1.ProductFull.create(req.body);
            res.status(200);
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    else {
        res.status(422);
    }
});
exports.createProductFull = createProductFull;
const deleteProductFull = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.slug) {
        try {
            yield productFull_model_1.ProductFull.destroy({
                where: {
                    slug: req.params.slug,
                },
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    else {
        res.status(422);
    }
});
exports.deleteProductFull = deleteProductFull;
const updateProductFull = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length) {
        try {
            yield productFull_model_1.ProductFull.update(req.body, {
                where: {
                    id: req.params.Id,
                },
            });
            res.status(200);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(422).send("Не удалось обновить товар");
    }
});
exports.updateProductFull = updateProductFull;
//# sourceMappingURL=productFull.contoller.js.map