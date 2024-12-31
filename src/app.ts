import express, { Application,Request,Response } from 'express';
 
// importing routes
import userRoute from './routes/user.js';
import connectDB from './db/dbconnect.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

const app:Application = express();


app.use(express.json());
app.use("/api/v1/user",userRoute)
app.get('/', (req:Request, res:Response) => {    
    res.send('Hello World, from Express');
});

// connecting to database
connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log(err);
    });
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    })  
}).catch((error)=>{
    console.error(error)
});



app.use(errorMiddleware);
