import mongoose, {Document, Schema } from "mongoose";
import validator from "validator";

interface Iuser extends Document{
    _id:string
    // password:string
    role:"admin" | "user"
    email:string
    photo:string
    gender:"male" | "female" | "other"
    dob:Date
    name:string
    createdAt:Date
    updatedAt:Date
    // virtual
    age: number
}

const userSchema:Schema<Iuser> = new mongoose.Schema({
    _id:{
        type:String,
        unique:[true,"id already exists"],
        required:[true,"Please enter id"]
    },
    // password:{
    //     type:String,
    //     required:[true,"Please enter Password"]
    // },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    name:{
        type:String,
        required:[true,"Please enter Name"]
    },
    email:{
        type:String,
        unique:[true,"email already exists"],
        required:[true,"Please enter your email"],
        validate: validator.default.isEmail
    },
    photo:{
        type:String,
        // required:[true,"Please add Photo"]
    },
    gender:{
        type:String,
        enum:["male","female","other"],
        required:[true,"Please enter gender"]
    },
    dob:{
        type:Date,
        required:[true,"Please enter Date of Birth"]
    }
},
{
    timestamps:true
}
);

userSchema.virtual('age').get(function(){
    const today = new Date();
    const Dob = this.dob;
    let age = today.getFullYear() - Dob.getFullYear();
    
    if(today.getMonth() < Dob.getMonth() || (today.getMonth() == Dob.getMonth() && today.getDate() < Dob.getDate())){
        age--;
    }
    return age;
})

export const User = mongoose.model<Iuser>('User',userSchema);
