import { Router, query } from "express";
import { createUser, deleteMYProfile, deleteUser, getByuserID, getUser, myProfile, updateMyProfile, updateUser, userlogin } from "../Controller/usercontroller.js";
import { isAuthenticated } from "../Middleware/isAuthenticated.js";



let userRouter = Router();

userRouter.route("/")

.post(createUser)
.get(getUser)

userRouter
.route("/my-profile")
.get(myProfile)
.patch(isAuthenticated,updateMyProfile)
.delete(isAuthenticated,deleteMYProfile)

userRouter
.route()

userRouter.route("/:userId") //Another router for related URL'S

.get(getByuserID)
.patch(updateUser)


.delete(deleteUser)

userRouter.route("/login")
.post(userlogin)




export default userRouter;
