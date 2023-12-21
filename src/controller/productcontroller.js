import { Product } from "../../smodel/model.js";

export const createProduct = async (req, res) => {
    let productData = req.body;
    try {
        let result = await Product.create(productData);
        res.json({
            success: true,
            message: "Product Data is created successfully",
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
}

export const getProduct = async (req, res) => {
    let query = req.query;
    try {
        //let result = await Product.find(query);
        //let result = await Product.find({}).populate("productId");
        let result = await Product.find({}).populate("productId", "name price");

        res.json({
            success: true,
            message: "Products read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}

export const getProductById = async (req, res) => {
    let productId = req.params.productId;
    try {
        let result = await Product.findById(productId);
        res.json({
            success: true,
            message: "Product read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}

export const updateProduct = async (req, res) => {
    let productId = req.params.productId;
    let data = req.body;
    try {
        let result = await Product.findByIdAndUpdate(productId, data);
        res.json({
            success: true,
            message: "Product updated successfully.",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
}

export const deleteProduct = async (req, res) => {
    let productId = req.params.productId;
    try {
        let result = await Product.findByIdAndDelete(productId);
        res.json({
            success: true,
            message: "Product deleted successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}
