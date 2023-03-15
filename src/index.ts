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

const compression = require("compression");
const app = express();
app.use(compression());

const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const syncDatabase = async () => {
  await sequelize.sync({ force: true }),
    // ProductPublicList.bulkCreate([
    //   {
    //     id: 1,
    //     name: "Product 1",
    //     category: { id: 1, name: "Category 1", slug: "Category 1" },
    //     image: {
    //       height: 500,
    //       width: 500,
    //       uri: "https://example.com/image1.jpg",
    //     },
    //   },
    //   {
    //     id: 2,
    //     name: "Product 2",
    //     category: { id: 12, name: "Category 2", slug: "Category 2" },
    //     image: {
    //       height: 600,
    //       width: 600,
    //       uri: "https://example.com/image2.jpg",
    //     },
    //   },
    // ]);
    sequelize.authenticate();
};

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
app.put("/categories", updateCategory);
app.delete("/categories", deleteCategory);
app.post("/categories", createCategory);

app.post("/questionsForm", createCategory);
app.get("/questionsForm", getAllQuestionsForms);
app.delete("/questionsForm", deleteQuestionsForm);

app.post("/partnershipRequests", createNewPartnershipRequest);
app.delete("/partnershipRequests", deletePartnershipRequest);
app.get("/questionsForm", getAllPartnershipRequests);

app.get("/productsPublicList", getProductsPublicList);

app.get("/productsFull", getProductFull);
app.put("/productsFull", updateProductFull);
app.delete("/productsFull", deleteProductFull);
app.post("/productsFull", createProductFull);

// categories page

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
