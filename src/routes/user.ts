import express from 'express'
import { deleteUser, getAllUsers, getUser, newUser } from '../controllers/user.controller.js';
import { adminOnly } from '../middlewares/auth.middleware.js';

const userRoute = express.Router();

// route - api/v1/user/new
userRoute.post("/new",newUser)

// route - api/v1/user/all
userRoute.get("/all",adminOnly ,getAllUsers)

// route - api/v1/user/:dynamicID

userRoute.route("/:id").get(getUser).delete(adminOnly,deleteUser)
export default userRoute
