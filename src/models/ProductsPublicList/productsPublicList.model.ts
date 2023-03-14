// import { Model, DataTypes, Optional } from "sequelize";
// import sequelize from "..";
// import { Image, ImageSize, IImage } from "../Images/image.model";
// import { Category } from "../Categories/categories.model";
// import { ProductFull } from "../ProductFull/productFull.model";

// export interface IProductPublicList {
//   id: number;
//   name: string;
//   category: {
//     id: number;
//     name: string;
//     slug: string;
//   };
//   image: Record<ImageSize, IImage>;
// }

// interface ProductPublicListAttributes
//   extends Optional<IProductPublicList, "id"> {}
// interface ProductPublicListInstance
//   extends Model<IProductPublicList, ProductPublicListAttributes>,
//     IProductPublicList {}

// // ProductPublicList model
// export const ProductPublicList = sequelize.define<ProductPublicListInstance>(
//   "ProductPublicList",
//   {
//     id: {
//       primaryKey: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: ProductFull,
//         key: "Id",
//       },
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: ProductFull,
//         key: "Name",
//       },
//     },
//     category: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: ProductFull,
//         key: "Category",
//       },
//     },
//     image: {
//       type: DataTypes.STRING,
//       references: {
//         model: Image,
//         key: "uri",
//       },
//     },
//   }
// );
