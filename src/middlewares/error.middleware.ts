import {NextFunction, Request,Response } from 'express';
import ErrorHandler from '../utils/ErrorHandler.js';


export const errorMiddleware=(
    err:ErrorHandler,
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    err.message ||= "Something went wrong";
    err.statusCode ||= 500;
    res.status(err.statusCode).json({
        success:false,
        message:`error: ${err.message}`
    });
}


