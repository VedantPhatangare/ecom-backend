import { User } from "../models/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { TryCatch } from "../utils/TryCatchHandler.js";

export const adminOnly = TryCatch(
    async(req,res,next)=>{

    const {id} = req.query;

    if(!id) throw new ErrorHandler("Please Login to access this page",401);

    const user  = await User.findById(id);

    if(!user) throw new ErrorHandler("Invalid user id",404);

    if(user.role !== "admin") throw new ErrorHandler("Access Denied",403);
    
    next();
});


