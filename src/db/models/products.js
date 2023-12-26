import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    productName: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    sold: Number,
    onhand: Number,
    size: Number,
  },
  { timestamps: true }
);

const Product =
  mongoose.model.Product || mongoose.model("Product", productsSchema);

export default Product;
