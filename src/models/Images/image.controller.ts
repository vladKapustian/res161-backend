import upload from "../../utils/multer";
import { Request, Response } from "express";
import { Image } from "./image.model";
import multer from "multer";
import sharp from "sharp";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const getImages = (req: Request, res: Response) => {
  try {
    const { filename } = req.params;
    res.sendFile(`./src/images/${filename}`);
  } catch (err) {
    res.send(404);
  }
};

export const createImage = async (req: Request, res: Response) => {
  try {
    upload.single("file")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res.status(400).send("Multer error");
      } else if (err) {
        // An unknown error occurred when uploading.
        res.status(500).send("Unknown error");
      }
    });
  } catch (error) {
    res.status(500).send("Unknown error");
  } finally {
    try {
      const filePath = req.file?.path;
      let fileExt, fileName;
      if (filePath) {
        fileExt = path.extname(filePath);
        fileName = path.basename(filePath, fileExt);
      } else {
        res.send(404);
      }

      const imageBuffer = await sharp(filePath).toBuffer();

      let filesNamesArray: string[] = [];
      for (let i = 0; i < 4; i++) {
        filesNamesArray[i] = uuidv4();
      }

      const imageSizes: { width: number; heigth: number }[] = [
        {
          width: 286,
          heigth: 380,
        },
        {
          width: 420,
          heigth: 600,
        },
        {
          width: 240,
          heigth: 320,
        },
        {
          width: 420,
          heigth: 600,
        },
      ];

      const promises = imageSizes.map((image: { width: number; heigth: number }) => {
        const fileName = uuidv4();
        sharp(imageBuffer)
          .resize(image.width, image.heigth)
          .webp({ lossless: true })
          .toFile(`./src/images/${fileName}`),
          Image.create({ uri: fileName, width: image.width, height: image.heigth });
        return fileName;
      });

      const fileNames = await Promise.all(promises);

      res.send("Image uploaded and resized successfully");

      return fileNames;
    } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  }
};
