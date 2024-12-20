import express, { Application,Request,Response } from 'express';
 
const app:Application = express();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})  
app.get('/', (req:Request, res:Response) => {    
    res.send('Hello World, from Express');
});