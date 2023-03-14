import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import { ProductPublicList } from "./models/ProductsPublicList/productsPublicList.model";
import { ProductFull } from "./models/Product/productFull.model";
import { Category } from "./models/Categories/categories.model";
import { Image } from "./models/Images/image.model";
import { Attribute } from "./models/Attributes/attributes.model";
import { QuestionsForm } from "./models/QuestionsForm/questionsForm.model";
import { PartnershipRequest } from "./models/PartnershipRequest/partnershipRequest.model";
import sequelize from "./models";

const app = express();

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
      PartnershipRequest.sync({ force: true }),
      ProductFull.sync({ force: true }),
      Category.sync({ force: true }),
      Attribute.sync({ force: true }),
      Image.sync({ force: true }),
      QuestionsForm.sync({ alter: true }),
      sequelize.authenticate(),
    ]).then(() => console.log("Connection has been established successfully."));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  // rest of your server initialization code
};

_startServer();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
