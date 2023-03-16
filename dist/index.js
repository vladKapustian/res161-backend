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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("./models"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const productFull_model_1 = require("./models/Product/productFull.model");
const categories_model_1 = require("./models/Categories/categories.model");
const image_model_1 = require("./models/Images/image.model");
const attributes_model_1 = require("./models/Attributes/attributes.model");
const questionsForm_model_1 = require("./models/QuestionsForm/questionsForm.model");
const partnershipRequest_model_1 = require("./models/PartnershipRequest/partnershipRequest.model");
const categories_controller_1 = require("./models/Categories/categories.controller");
const productPublicList_controller_1 = require("./models/Product/productPublicList.controller");
const questionsForm_controller_1 = require("./models/QuestionsForm/questionsForm.controller");
const productFull_contoller_1 = require("./models/Product/productFull.contoller");
const partnershipRequest_controller_1 = require("./models/PartnershipRequest/partnershipRequest.controller");
const auth_1 = require("./utils/auth");
const compression = require("compression");
const app = (0, express_1.default)();
app.use(compression());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const _startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Promise.all([
            // ProductPublicList.sync({ force: true }),
            partnershipRequest_model_1.PartnershipRequest.sync({ alter: true }),
            productFull_model_1.ProductFull.sync({ alter: true }),
            categories_model_1.Category.sync({ alter: true }),
            attributes_model_1.Attribute.sync({ alter: true }),
            image_model_1.Image.sync({ alter: true }),
            questionsForm_model_1.QuestionsForm.sync({ alter: true }),
            models_1.default.authenticate(),
        ]).then(() => console.log("Connection has been established successfully."));
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
    // rest of your server initialization code
});
_startServer();
app.get("/categories", categories_controller_1.getCategories);
app.put("/categories", auth_1.authenticateToken, categories_controller_1.updateCategory);
app.delete("/categories", auth_1.authenticateToken, categories_controller_1.deleteCategory);
app.post("/categories", auth_1.authenticateToken, categories_controller_1.createCategory);
app.post("/questionsForm", categories_controller_1.createCategory);
app.get("/questionsForm", auth_1.authenticateToken, questionsForm_controller_1.getAllQuestionsForms);
app.delete("/questionsForm", auth_1.authenticateToken, questionsForm_controller_1.deleteQuestionsForm);
app.post("/partnershipRequests", partnershipRequest_controller_1.createNewPartnershipRequest);
app.delete("/partnershipRequests", auth_1.authenticateToken, partnershipRequest_controller_1.deletePartnershipRequest);
app.get("/questionsForm", auth_1.authenticateToken, partnershipRequest_controller_1.getAllPartnershipRequests);
app.get("/productsPublicList", productPublicList_controller_1.getProductsPublicList);
app.get("/productsFull", productFull_contoller_1.getProductFull);
app.put("/productsFull", auth_1.authenticateToken, productFull_contoller_1.updateProductFull);
app.delete("/productsFull", auth_1.authenticateToken, productFull_contoller_1.deleteProductFull);
app.post("/productsFull/:productId", auth_1.authenticateToken, productFull_contoller_1.createProductFull);
// categories page
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map