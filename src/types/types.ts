import { NextFunction, Request, Response } from "express"

export interface UserReqBody{
    name:string,
    email:string,
    photo:string,
    _id:string,
    dob:Date,
    gender:string
}
export type ControllerType = (
    req: Request, 
    res: Response,
    next: NextFunction
) => Promise<Response<any, Record<string, any> > | void>
