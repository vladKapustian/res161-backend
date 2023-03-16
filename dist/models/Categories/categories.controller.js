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
exports.createCategory = exports.deleteCategory = exports.updateCategory = exports.getCategories = void 0;
const categories_model_1 = require("./categories.model");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categories_model_1.Category.findAll();
        res.status(200).send(categories);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getCategories = getCategories;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length) {
        try {
            yield categories_model_1.Category.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).send();
        }
        catch (error) {
            res.status(422).send(error);
        }
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield categories_model_1.Category.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteCategory = deleteCategory;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length) {
        try {
            yield categories_model_1.Category.create(req.body);
        }
        catch (error) {
            res.status(422).send(error);
        }
    }
    else {
        res.status(500).send();
    }
});
exports.createCategory = createCategory;
//# sourceMappingURL=categories.controller.js.map