import { Router } from "express";
import { createReview, deleteReview, getReview, getReviewById, updateReview } from "../controller/reviewcontroller.js";

let reviewRouter = Router();

reviewRouter.route("/")
    .post(createReview)
    .get(getReview);

reviewRouter.route("/:reviewId")
    .get(getReviewById)
    .patch(updateReview)
    .delete(deleteReview);

export default reviewRouter;
