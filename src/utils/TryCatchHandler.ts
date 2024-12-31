import { ControllerType } from '../types/types.js';
import { NextFunction,Request,Response } from 'express';
import ErrorHandler from './ErrorHandler.js';

export const TryCatch = (func:ControllerType)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
       Promise.resolve(func(req,res,next)).catch((err) => next(new ErrorHandler(err.message, 400)));
   }
}