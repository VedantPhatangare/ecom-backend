import express from 'express'
import { deleteUser, getAllUsers, getUser, newUser } from '../controllers/user.controller.js';

const userRoute = express.Router();

// route - api/v1/user/new
userRoute.post("/new",newUser)

// route - api/v1/user/all
userRoute.get("/all",getAllUsers)

// route - api/v1/user/:dynamicID
userRoute.get("/:id",getUser)
userRoute.delete("/:id",deleteUser)

export default userRoute
