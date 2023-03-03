import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Sequelize } from "sequelize";

const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

async function startServer() {
  try {
    await Promise.all([
      sequelize.sync({ alter: true }),
      sequelize.authenticate(),
    ]).then(() => console.log("Connection has been established successfully."));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  // rest of your server initialization code
}

app.get("/", (req: Request, res: Response) => {
  startServer().then(() => res.send("Hello World!"));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
