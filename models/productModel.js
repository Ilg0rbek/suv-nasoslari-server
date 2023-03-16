import { Schema, model } from "mongoose";

const Products = new Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 20,
  },
  little_desc: {
    type: String,
    required: true,
    min: 10,
    max: 50,
  },
  photo: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: true,
    min: 15,
    max: 230,
  },
});

export const Product = model("Product", Products);
