import express, { NextFunction, Response,Request } from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler';

const app = express();

// Routes
//Http methods;
app.get('/', (req,res,next) =>{
    res.json({message: "Welcome to elib api"})
})

//Global error handler
app.use(globalErrorHandler);


export default app;