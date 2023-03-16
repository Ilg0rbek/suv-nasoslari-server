import { Router } from "express";
import Products from "../controllers/productController.js";
import multer from "multer";
import path from "path";
import { checkUser } from "../middleware/index.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const productRouter = Router();

productRouter.get("/products", checkUser, Products.getAllProduct);
productRouter.get("/add-product", checkUser, Products.addNewProductPage);
productRouter.post(
  "/product",
  checkUser,
  upload.single("photo"),
  Products.addNewProduct
);
productRouter.get("/product/:id", checkUser, Products.getUpdatePage);
productRouter.post(
  "/update/:id",
  upload.single("photo"),
  Products.updateProduct
);
productRouter.get("/delete/:id", checkUser, Products.deleteProduct);

export default productRouter;
