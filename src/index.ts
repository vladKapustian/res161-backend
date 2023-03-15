import sequelize from "./models";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { ProductFull } from "./models/Product/productFull.model";
import { Category } from "./models/Categories/categories.model";
import { Image } from "./models/Images/image.model";
import { Attribute } from "./models/Attributes/attributes.model";
import { QuestionsForm } from "./models/QuestionsForm/questionsForm.model";
import { PartnershipRequest } from "./models/PartnershipRequest/partnershipRequest.model";

import {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from "./models/Categories/categories.controller";
import { getProductsPublicList } from "./models/Product/productPublicList.controller";
import {
  createQuestionsForm,
  getAllQuestionsForms,
  deleteQuestionsForm,
} from "./models/QuestionsForm/questionsForm.controller";
import {
  getProductFull,
  deleteProductFull,
  updateProductFull,
  createProductFull,
} from "./models/Product/productFull.contoller";
import {
  createNewPartnershipRequest,
  deletePartnershipRequest,
  getAllPartnershipRequests,
} from "./models/PartnershipRequest/partnershipRequest.controller";
import { authenticateToken } from "./utils/auth";

const compression = require("compression");
const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

const _startServer = async () => {
  try {
    await Promise.all([
      // ProductPublicList.sync({ force: true }),
      PartnershipRequest.sync({ alter: true }),
      ProductFull.sync({ alter: true }),
      Category.sync({ alter: true }),
      Attribute.sync({ alter: true }),
      Image.sync({ alter: true }),
      QuestionsForm.sync({ alter: true }),
      sequelize.authenticate(),
    ]).then(() => console.log("Connection has been established successfully."));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  // rest of your server initialization code
};

_startServer();

app.get("/categories", getCategories);
app.put("/categories", authenticateToken, updateCategory);
app.delete("/categories", authenticateToken, deleteCategory);
app.post("/categories", authenticateToken, createCategory);

app.post("/questionsForm", createCategory);
app.get("/questionsForm", authenticateToken, getAllQuestionsForms);
app.delete("/questionsForm", authenticateToken, deleteQuestionsForm);

app.post("/partnershipRequests", createNewPartnershipRequest);
app.delete("/partnershipRequests", authenticateToken, deletePartnershipRequest);
app.get("/questionsForm", authenticateToken, getAllPartnershipRequests);

app.get("/productsPublicList", getProductsPublicList);

app.get("/productsFull", getProductFull);
app.put("/productsFull", authenticateToken, updateProductFull);
app.delete("/productsFull", authenticateToken, deleteProductFull);
app.post("/productsFull", authenticateToken, createProductFull);

// categories page

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
