import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from "../controller/productcontroller.js";

let productRouter = Router();

productRouter.route("/")
    .post(createProduct)
    .get(getProduct);

productRouter.route("/:productId")
    .get(getProductById)
    .patch(updateProduct)
    .delete(deleteProduct)

export default productRouter;
