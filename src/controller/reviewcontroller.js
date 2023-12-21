import { Review } from "../../smodel/model.js";

export const createReview = async (req, res) => {
    let reviewData = req.body;
    try {
        let result = await Review.create(reviewData);
        res.json({
            success: true,
            message: "Review Data is created successfully",
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
}

export const getReview = async (req, res) => {
    let query = req.query;
    try {
        //let result = await Review.find(query);
        //let result = await Review.find({}).populate("reviewId");
        let result = await Review.find({}).populate("reviewId", "name price");

        res.json({
            success: true,
            message: "Reviews read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}

export const getReviewById = async (req, res) => {
    let reviewId = req.params.reviewId;
    try {
        let result = await Review.findById(reviewId);
        res.json({
            success: true,
            message: "Review read successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}

export const updateReview = async (req, res) => {
    let reviewId = req.params.reviewId;
    let data = req.body;
    try {
        let result = await Review.findByIdAndUpdate(reviewId, data);
        res.json({
            success: true,
            message: "Review updated successfully.",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
}

export const deleteReview = async (req, res) => {
    let reviewId = req.params.reviewId;
    try {
        let result = await Review.findByIdAndDelete(reviewId);
        res.json({
            success: true,
            message: "Review deleted successfully",
            result: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}
