import {Request,Response,NextFunction } from "express";
import { User } from "../models/user.js";
import {UserReqBody} from '../types/types.js'
import { TryCatch } from "../utils/TryCatchHandler.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const newUser = TryCatch(
    async(req:Request<{},{},UserReqBody>,res:Response,next:NextFunction)=>{
        // throw new ErrorHandler('This is an error',500);
    const {name,email,photo,gender,_id,dob}= req.body;
    let user = await User.findById(_id);
    if(user){
        return res.status(200).json({
            success:true,
            message:`Welcome back, ${name}`
        })
    }
    user = await User.create({
        name,email,photo,gender,_id,dob
    });
    console.log(`User Created succesfully by username: ${name}`);
    return res.status(200).json({
        success:true,
        message:`Welcome, ${name}`
    })    
    }
)

export const getAllUsers = TryCatch(
    async(req,res,next)=>{
        const users = await User.find({});
        return res.status(200).json({
            success:true,
            message:`All users fetched successfully`,
            Users:users
        })
    }
)


export const getUser = TryCatch(
    async(req,res,next)=>{
        const id = req.params.id;
        const user = await User.findById(id); 
        if(!user){
            return next(new ErrorHandler("User not found", 404))
        }  
        return res.status(200).json({
            success:true,
            message:`user fetched successfully`,
            User:user
        })
    }
)

export const deleteUser = TryCatch(
    async (req,res,next)=>{
        const id =req.params.id;
        if(!await User.findById(id)){return next(new ErrorHandler("User not found", 404))}
        
        await User.deleteOne({_id:id});
        return res.status(200).json({
            success:true,
            message:`User deleted successfully`,
        })
        
    }   
)