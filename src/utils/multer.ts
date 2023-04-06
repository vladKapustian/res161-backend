import multer, { DiskStorageOptions } from "multer";
import { Image } from "../models/Images/image.model";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";
import { encode } from "blurhash";

const getImageData = (image: any) => {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext("2d");
  if (context === null) {
    throw new Error("Could not get 2D context for canvas.");
  }
  context.drawImage(image, 0, 0);
  return context.getImageData(0, 0, image.width, image.height);
};

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "src/images/");
  },
  filename: function (req, file, callback) {
    const fileName = uuidv4();
    if (req.file) {
      const buffer = req.file.buffer;
      let width, height;
      sharp(buffer)
        .metadata()
        .then((metadata) => {
          width = metadata.width;
          height = metadata.height;
        });
      const imageData = getImageData(buffer);
      const hash = encode(imageData.data, imageData.width, imageData.height, 4, 4);
      Image.create({ uri: fileName, width: width, height: height, blurhash: hash });
    }
    callback(null, fileName);
  },
});

const fileFilter: DiskStorageOptions["destination"] = function (req, file, callback) {
  if (file.mimetype.startsWith("image/")) {
    callback(null, "src/images/");
  } else {
    callback(new Error("Only image files are allowed!"), "src/images/");
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default upload;
