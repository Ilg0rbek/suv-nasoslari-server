import { Product } from "../models/productModel.js";

class Products {
  //Mehtod GET
  //get all product
  static getAllProduct = async (req, res) => {
    try {
      const data = await Product.find();
      res.render("pages/index.ejs", {
        data,
      });
    } catch (err) {
      console.log("error : " + err.message);
    }
  };

  //Method ___
  //get product page
  static addNewProductPage = async (req, res) => {
    try {
      res.render("pages/product.ejs", {
        title: "Maxsulotni qo'shish",
        method: "POST",
        data: [],
      });
    } catch (err) {
      console.log("error : " + err.message);
    }
  };

  // Method POST
  // add new product
  static addNewProduct = async (req, res) => {
    try {
      const { name, little_desc, desc } = req.body;
      const newProduct = new Product({
        name,
        little_desc,
        photo: req.file.filename,
        desc,
      });
      await newProduct.save();
      res.redirect("/products");
    } catch (err) {
      console.log("error : " + err.message);
    }
  };

  //Method GET
  // get Update page
  static getUpdatePage = async (req, res) => {
    const { id } = req.params;
    const data = await Product.findById({ _id: id });
    res.render("pages/product.ejs", {
      title: "Maxsulotni yangilash",
      method: "POST",
      data,
    });
  };

  //Method PUT
  // Update product
  static updateProduct = async (req, res) => {
    const { name, little_desc, desc } = req.body;
    try {
      const editedPoster = {
        name,
        little_desc,
        photo: req.file.filename,
        desc,
      };
      await Product.findByIdAndUpdate(req.params.id, editedPoster);
      res.redirect("/products");
    } catch (err) {
      console.log("error : " + err.message);
    }
  };

  //Method GET
  // delete product
  static deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndRemove({ _id: id });
      res.redirect("/products");
    } catch (err) {
      console.log(err.message);
    }
  };
}

export default Products;
